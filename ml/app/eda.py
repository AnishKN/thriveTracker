import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64

def perform_eda(df):
    # Example EDA calculations
    description = df.describe(include='all').to_dict()
    
    # Example plot (ensure the column exists before plotting)
    if 'How many hours do you spend studying or working per week?' in df.columns:
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
    else:
        img_str = None  # Set to None if the column does not exist

    return {
        'description': description,
        'plot': img_str
    }
