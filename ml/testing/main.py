from flask import Flask, request, render_template, jsonify
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

app = Flask(__name__)

# Load the dataset
try:
    df = pd.read_csv('results.csv')
except Exception as e:
    print(f"Error loading CSV file: {e}")
    df = pd.DataFrame()  # Create an empty DataFrame in case of error

# Route for the home page
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

# Route for EDA summary
@app.route('/eda', methods=['GET'])
def eda():
    if df.empty:
        return "Dataset is empty or not loaded properly.", 500

    # Describe data
    description = df.describe(include='all').to_html()

    # Check for missing values
    missing_values = df.isnull().sum().to_frame(name='Missing Values').to_html()

    return render_template('eda.html', description=description, missing_values=missing_values)

# Route for visualizations
@app.route('/visualize', methods=['GET'])
def visualize():
    if df.empty:
        return "Dataset is empty or not loaded properly.", 500

    plots = []

    def plot_histogram(column):
        img = io.BytesIO()
        plt.figure(figsize=(10, 6))
        sns.histplot(df[column].dropna())
        plt.title(f'Distribution of {column}')
        plt.savefig(img, format='png')
        plt.close()
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode('utf8')
        return plot_url

    def plot_boxplot(column):
        img = io.BytesIO()
        plt.figure(figsize=(10, 6))
        sns.boxplot(x=df[column].dropna())
        plt.title(f'Box Plot of {column}')
        plt.savefig(img, format='png')
        plt.close()
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode('utf8')
        return plot_url

    # Generate visualizations for numeric columns
    numeric_columns = df.select_dtypes(include='number').columns
    for column in numeric_columns:
        plots.append({'title': f'Distribution of {column}', 'url': plot_histogram(column)})
        plots.append({'title': f'Box Plot of {column}', 'url': plot_boxplot(column)})

    # Pair plot of first few numeric columns (if enough columns exist)
    if len(numeric_columns) > 1:
        img = io.BytesIO()
        plt.figure(figsize=(10, 6))
        sns.pairplot(df[numeric_columns[:5]].dropna())
        plt.title('Pair Plot of First Few Numeric Columns')
        plt.savefig(img, format='png')
        plt.close()
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode('utf8')
        plots.append({'title': 'Pair Plot of First Few Numeric Columns', 'url': plot_url})

    # Correlation heatmap
    if len(numeric_columns) > 1:
        img = io.BytesIO()
        plt.figure(figsize=(10, 6))
        corr_matrix = df[numeric_columns].corr()
        sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', vmin=-1, vmax=1)
        plt.title('Correlation Heatmap')
        plt.savefig(img, format='png')
        plt.close()
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode('utf8')
        plots.append({'title': 'Correlation Heatmap', 'url': plot_url})

    return render_template('visualize.html', plots=plots)

# Route for ML model
@app.route('/ml', methods=['GET'])
def ml_model():
    if df.empty:
        return "Dataset is empty or not loaded properly.", 500

    try:
        # Preprocessing
        df_clean = df.copy()

        # Convert all columns to numeric, set errors='coerce' to handle non-numeric values
        df_clean = df_clean.apply(pd.to_numeric, errors='coerce')

        # Drop rows with NaN values
        df_clean = df_clean.dropna()

        # Check if the cleaned dataset is empty or has too few rows
        if df_clean.shape[0] < 2:
            return "Not enough data to train the model.", 400

        # Separate features and target variable
        X = df_clean.iloc[:, :-1]  # Features
        y = df_clean.iloc[:, -1]   # Target variable

        # Split the data
        test_size = 0.2
        if len(X) <= 1:
            return "Not enough samples to split into training and test sets.", 400

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=42)

        # Train the model
        model = LinearRegression()
        model.fit(X_train, y_train)

        # Predict and evaluate
        predictions = model.predict(X_test)
        mse = mean_squared_error(y_test, predictions)
        r2 = r2_score(y_test, predictions)

        return jsonify({
            'Mean Squared Error': mse,
            'R2 Score': r2
        })
    except Exception as e:
        return f"Error in ML model processing: {e}", 500

if __name__ == '__main__':
    app.run(debug=True)
