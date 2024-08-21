from flask import Blueprint, request, jsonify
import pandas as pd
from .eda import perform_eda, calculate_dropout_percentage

bp = Blueprint('routes', __name__)

@bp.route('/analyze-eda', methods=['POST'])
def analyze_eda():
    # Directly use the request.json, which should be a list of dictionaries
    data = request.json
    # Convert to DataFrame
    df = pd.DataFrame(data)
    
    # Perform EDA and calculate dropout
    eda_results = perform_eda(df)
    dropout_percentage = calculate_dropout_percentage(df)
    
    return jsonify({
        'eda_results': eda_results,
        'dropout_percentage': dropout_percentage
    })
