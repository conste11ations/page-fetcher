/* example workflow
node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
*/

const request = require('request');
const fs = require('fs');
const userInput = process.argv.slice(2);

request(userInput[0], (error, response, body) => {
  if (!error) {
    fileWriter(body, userInput[1]);
  } else {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  }
});

const fileWriter = (data, fileName) => {
  console.log('Attempting to write to file...');
  fs.writeFile(fileName, data, (error) => {
    if (!error) {
      const stats = fs.statSync(fileName);
      const fileSizeInBytes = stats["size"];
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileName}`);
    }
  });
};


