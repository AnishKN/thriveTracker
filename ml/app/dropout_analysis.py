import pandas as pd

def calculate_dropout_percentage(df):
    # Ensure that the column exists before processing
    if 'What is your current employment status?' in df.columns:
        total_students = len(df)
        dropout_students = df[df['What is your current employment status?'] == 'Unemployed']
        dropout_percentage = (len(dropout_students) / total_students) * 100
        return dropout_percentage
    else:
        return 0  # Return 0 if the column is not present
