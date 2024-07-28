import pandas as pd
import numpy as np
from sklearn.metrics import precision_recall_fscore_support
from collections import defaultdict

# Read the CSV file
df = pd.read_csv('results.csv')

# Initialize dictionaries to store true and predicted labels for each intent
true_labels = defaultdict(list)
pred_labels = defaultdict(list)

# Populate the dictionaries
for _, row in df.iterrows():
    intent = row['Intent Identified']
    if pd.isna(intent) or intent == '':
        continue  # Skip empty or NaN intents
    correct = row['Correct/Incorrect'] == 'Correct'
    true_labels[intent].append(correct)
    pred_labels[intent].append(True)

# Calculate metrics for each intent
metrics = []
for intent in true_labels.keys():
    precision, recall, f1, _ = precision_recall_fscore_support(
        true_labels[intent], pred_labels[intent], average='binary', zero_division=0
    )
    metrics.append({
        'Intent': intent,
        'Precision': precision,
        'Recall': recall,
        'F1 Score': f1
    })

# Create a DataFrame from the metrics
metrics_df = pd.DataFrame(metrics)

# Sort the DataFrame by intent
metrics_df = metrics_df.sort_values('Intent')

# Generate LaTeX table
latex_table = """\\begin{table}[h]
\\centering
\\begin{tabular}{|l|c|c|c|}
\\hline
\\textbf{Intent} & \\textbf{Precision} & \\textbf{Recall} & \\textbf{F1 Score} \\\\
\\hline
"""

for _, row in metrics_df.iterrows():
    latex_table += f"{row['Intent']} & {row['Precision']:.3f} & {row['Recall']:.3f} & {row['F1 Score']:.3f} \\\\\n\\hline\n"

latex_table += """\\end{tabular}
\\caption{Precision, Recall, and F1 Score for Each Intent}
\\label{tab:intent_metrics}
\\end{table}
"""

# Print the LaTeX table
print(latex_table)

# Optionally, save the LaTeX table to a file
with open('intent_metrics.tex', 'w') as f:
    f.write(latex_table)
