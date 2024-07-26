const puppeteer = require('puppeteer');
const conversations = require('./conversations.js');
const fs = require('fs');
const path = require('path');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function appendToCSV(convID, messID, message) {
  const csvLine = `${convID},${messID},"${message}"\n`;

  fs.appendFile('data.csv', csvLine, err => {
    if (err) {
      console.error('Error appending to CSV:', err);
    } else {
      console.log('Data appended successfully');
    }
  });
}

async function runChatbot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  for (const [key, messages] of Object.entries(conversations)) {
    await page.goto('https://rishav045.github.io/ChatBot_web/');

    // sleep 2 seconds to wait for the widget to load
    await sleep(2000);
    // Click on the chat button within shadow DOM
    await page.evaluate(async messages => {
      const sendBtn = document
        .querySelector('body > df-messenger')
        .shadowRoot.querySelector('div > df-messenger-chat')
        .shadowRoot.querySelector('div > df-messenger-user-input')
        .shadowRoot.querySelector('#sendIcon');

      const inp = document
        .querySelector('body > df-messenger')
        .shadowRoot.querySelector('div > df-messenger-chat')
        .shadowRoot.querySelector('div > df-messenger-user-input')
        .shadowRoot.querySelector(
          'div > div.input-box-wrapper > input[type=text]'
        );

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      function simulateClick(element) {
        const event = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        element.dispatchEvent(event);
      }

      async function send(messages) {
        for (const message of messages) {
          try {
            inp.value = message;
            await sleep(500); // Short delay to mimic typing
            simulateClick(sendBtn);
            await sleep(2000); // Wait between messages
          } catch (error) {
            console.error(`Failed to send message: ${message}`, error);
          }
        }
      }

      function open() {
        const widget = document
          .querySelector('body > df-messenger')
          .shadowRoot.querySelector('#widgetIcon');
        const pop = document
          .querySelector('body > df-messenger')
          .shadowRoot.querySelector('div > df-messenger-chat')
          .shadowRoot.querySelector('div > df-message-list')
          .shadowRoot.querySelector('#messageList');
        if (pop) simulateClick(pop);
        else simulateClick(widget);
      }

      open();
      await send(messages);
    }, messages); // Pass messages as an argument here

    messages.forEach((message, index) => {
      appendToCSV(key, index + 1, message);
    });
  }

  await browser.close();
}

runChatbot().catch(console.error);
