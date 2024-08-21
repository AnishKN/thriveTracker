import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64

def perform_eda(df):
    # Example EDA calculations
    description = df.describe(include='all').to_dict()
    
    # Example plot (you can add more plots as needed)
    plt.figure(figsize=(10, 6))
    sns.histplot(df['How many hours do you spend studying or working per week?'])
    plt.title('Study Hours Distribution')
    
    # Save plot to a bytes buffer
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    
    # Encode plot to base64
    img_str = base64.b64encode(buf.getvalue()).decode('utf-8')
    plt.close()  # Close the plot to free memory
    
    return {
        'description': description,
        'plot': img_str
    }

def calculate_dropout_percentage(df):
    # Ensure that the column exists before processing
    if 'What is your current employment status?' in df.columns:
        total_students = len(df)
        dropout_students = df[df['What is your current employment status?'] == 'Unemployed']
        dropout_percentage = (len(dropout_students) / total_students) * 100
        return dropout_percentage
    else:
        return 0  # Return 0 if the column is not present
