import csv
import matplotlib.pyplot as plt
from collections import defaultdict
from wordcloud import WordCloud
import os

# Create 'plots' directory if it doesn't exist
os.makedirs('plots', exist_ok=True)

def load_data(file_path):
    print("Attempting to read the CSV file...")
    data = []
    with open(file_path, 'r', encoding='utf-8') as f:
        csv_reader = csv.reader(f)
        headers = next(csv_reader)
        for row in csv_reader:
            if len(row) >= 7:
                data.append(row[:7])  # Only take the first 7 columns
    print(f"Data loaded successfully. Number of rows: {len(data)}")
    return headers[:7], data

def plot_accuracy(data):
    intent_correct = sum(1 for row in data if row[4] == 'Correct')
    entity_correct = sum(1 for row in data if row[6] == 'Correct')
    total = len(data)

    intent_accuracy = (intent_correct / total) * 100
    entity_accuracy = (entity_correct / total) * 100

    plt.figure(figsize=(10, 6))
    plt.bar(['Intent Identification', 'Entity Identification'], [intent_accuracy, entity_accuracy])
    plt.title('Accuracy of Intent and Entity Identification')
    plt.ylabel('Accuracy (%)')
    plt.ylim(0, 100)

    for i, v in enumerate([intent_accuracy, entity_accuracy]):
        plt.text(i, v + 1, f'{v:.1f}%', ha='center')

    plt.savefig('plots/accuracy_plot.png')
    plt.close()

def plot_intent_distribution(data):
    intent_counts = defaultdict(int)
    for row in data:
        intent_counts[row[3]] += 1

    plt.figure(figsize=(12, 8))
    plt.pie(intent_counts.values(), labels=intent_counts.keys(), autopct='%1.1f%%')
    plt.title('Distribution of Identified Intents')
    plt.axis('equal')
    plt.savefig('plots/intent_distribution.png')
    plt.close()

def plot_conversation_performance(data):
    conv_performance = defaultdict(lambda: {'Correct': 0, 'Incorrect': 0})
    for row in data:
        conv_id = row[0]
        if row[4] == 'Correct':
            conv_performance[conv_id]['Correct'] += 1
        else:
            conv_performance[conv_id]['Incorrect'] += 1

    conv_ids = sorted(conv_performance.keys())
    correct = [conv_performance[id]['Correct'] for id in conv_ids]
    incorrect = [conv_performance[id]['Incorrect'] for id in conv_ids]

    plt.figure(figsize=(12, 6))
    plt.bar(conv_ids, correct, label='Correct')
    plt.bar(conv_ids, incorrect, bottom=correct, label='Incorrect')
    plt.title('Correct vs Incorrect Identifications by Conversation')
    plt.xlabel('Conversation ID')
    plt.ylabel('Number of Messages')
    plt.legend(title='Identification Type')
    plt.tight_layout()
    plt.savefig('plots/conversation_performance.png')
    plt.close()

def plot_entity_wordcloud(data):
    all_entities = ' '.join(row[5] for row in data if row[5])

    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(all_entities)

    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.title('Most Common Identified Entities')
    plt.savefig('plots/entity_wordcloud.png')
    plt.close()

def plot_conversation_length(data):
    conv_lengths = defaultdict(int)
    for row in data:
        conv_lengths[row[0]] += 1

    lengths = list(conv_lengths.values())

    plt.figure(figsize=(10, 6))
    plt.hist(lengths, bins=range(min(lengths), max(lengths) + 2, 1), align='left')
    plt.title('Distribution of Conversation Lengths')
    plt.xlabel('Number of Messages')
    plt.ylabel('Frequency')
    plt.xticks(range(min(lengths), max(lengths) + 1))
    plt.savefig('plots/conversation_length_distribution.png')
    plt.close()

def main():
    headers, data = load_data('./results.csv')

    plot_accuracy(data)
    plot_intent_distribution(data)
    plot_conversation_performance(data)
    plot_entity_wordcloud(data)
    plot_conversation_length(data)

    print("All plots have been generated and saved in the 'plots/' directory.")

if __name__ == "__main__":
    main()
