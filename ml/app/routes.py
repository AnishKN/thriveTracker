from flask import Blueprint
import numpy as np 
from scipy import stats
import pandas as pd
import seaborn as sns
import plotly.io as pio
import plotly.express as px
import plotly.graph_objects as go
import plotly.express as pex
from plotly.subplots import make_subplots
from plotly.offline import init_notebook_mode, iplot
init_notebook_mode(connected=True)

import warnings
warnings.filterwarnings('ignore')

bp = Blueprint('eda', __name__)


@bp.route('/performEda', methods=['POST'])
def performEda():
    data = pd.read_csv(f'/kaggle/input/students-performance-in-exams/StudentsPerformance.csv')

    df_extra = []
    for i in range(9):
        df = pd.read_csv(f'/kaggle/input/more-exam-data/exams ({i+1}).csv')
        df_extra.append(df)
        
    data_total = pd.concat([data, pd.concat(df_extra)], axis=0)

    data = data_total.copy()
    print(data.info())
    
    print(data.head())


performEda()