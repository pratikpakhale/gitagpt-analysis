const fs = require('fs');
const path = require('path');

// Function to parse JSON string
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

// Function to extract data from interaction
function extractData(interaction) {
  if (interaction.conversationResponseJson) {
    const parsedJson = parseJSON(interaction.conversationResponseJson);
    if (parsedJson) {
      const message = parsedJson.queryText || '';
      const intent =
        parsedJson.intent && parsedJson.intent.displayName
          ? parsedJson.intent.displayName
          : '';

      let entities = '';
      if (parsedJson.parameters) {
        entities = Object.entries(parsedJson.parameters)
          .map(
            ([key, value]) =>
              `${key}: ${Array.isArray(value) ? value.join(', ') : value}`
          )
          .join('\n');
      }

      return { message, intent, entities };
    }
  }
  return null;
}

// Function to process conversations
function processConversations(data, startConvId) {
  const results = [];
  let convId = startConvId;

  data.sessionConversations.forEach(conversation => {
    conversation.interactions.forEach((interaction, intIndex) => {
      if (intIndex === 0) return; // Skip first interaction

      const extractedData = extractData(interaction);
      if (extractedData) {
        results.push({
          convID: convId,
          messageID: `${convId}-${intIndex}`,
          message: extractedData.message,
          intent: extractedData.intent,
          entities: extractedData.entities,
        });
      }
    });
    convId++;
  });

  return { results, nextConvId: convId };
}

// Function to write CSV
function writeCSV(data) {
  const csvContent = [
    'convID,messageID,message,Intent Identified,Correct/Incorrect,Entity Identified,Correct/Incorrect',
    ...data.map(
      row =>
        `${row.convID},${row.messageID},"${row.message.replace(/"/g, '""')}","${
          row.intent
        }", ,"${row.entities.replace(/"/g, '""')}", `
    ),
  ].join('\n');

  const outputPath = path.join(__dirname, 'output.csv');
  fs.writeFileSync(outputPath, csvContent);
  console.log(`CSV file has been written to ${outputPath}`);
}

// Main execution
const directoryPath = __dirname;
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }

  const jsonFiles = files.filter(file => file.endsWith('.json'));
  let allResults = [];
  let nextConvId = 1;

  jsonFiles.forEach(file => {
    const filePath = path.join(directoryPath, file);
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const data = parseJSON(jsonString);
    if (data) {
      const { results, nextConvId: newNextConvId } = processConversations(
        data,
        nextConvId
      );
      allResults = allResults.concat(results);
      nextConvId = newNextConvId;
    }
  });

  writeCSV(allResults);
});
