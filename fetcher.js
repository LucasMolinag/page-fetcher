const fs = require('fs');
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the URL of the page o download: ', (URL) => {
  rl.question('Enter the the file name for the saved file: ', (local) => {
    request(URL, (error, response, body) => {
      let pageError = error;
      let pageStatus = response.statusCode;
      let pageBody = body;

        fs.writeFile(local, pageBody, err => {
          if (err) {
            console.error(err);
          };
          fs.stat(local, (err, stats) => {
            if (err) {
              console.error(err);
            }
            console.log(`Downloaded and saved ${stats.size} bytes to ${local}`)
          });
        });
        rl.close();
      });      
    });
  });