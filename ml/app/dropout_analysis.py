import pandas as pd

def analyze_dropout(data):
    df = pd.DataFrame(data)
    
    # Example dropout analysis: Calculate dropout rate based on employment status
    dropout_count = df[df['employment_status'] == 'Unemployed'].shape[0]
    total_count = df.shape[0]
    dropout_percentage = (dropout_count / total_count) * 100
    
    return {'dropout_percentage': dropout_percentage}
