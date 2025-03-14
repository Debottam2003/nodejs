console.log("This is the text1..."); // Log a message to the console
const fs = require('fs'); // Import the 'fs' module for file system operations
fs.readFile('./movies.csv', 'utf8', (err, data) => { // Asynchronously read the contents of 'movies.csv' file
    if (err) {
        console.log("Data can not read the file ", err); // Log an error message if the file cannot be read
    } else {
        console.log(data); // Log the contents of the file
    }
});
console.log("This is the text2..."); // Log another message to the console


console.log("This is text1..."); // Log a message to the console
const fs = require('fs'); // Import the 'fs' module again (redundant, already imported above)
const data = fs.readFileSync('./movies.json', 'utf8'); // Synchronously read the contents of 'movies.json' file
console.log(JSON.parse(data)); // Parse and log the JSON data
console.log("This is the text1..."); // Log a message to the console


console.log("This is text1...");
const fs = require('fs').promises; // Import the 'fs' module with promises support
async function readFileAsync(filePath) { // Define an async function to read a file asynchronously
    try {
        let data = await fs.readFile(filePath, 'utf8'); // Await the reading of the file
        console.log(data); // Log the contents of the file
    } catch (err) {
        console.log("Error reading the file", err); // Log an error message if the file cannot be read
    }
}
readFileAsync('./text1.txt'); // Call the async function to read 'text1.txt'
console.log("This is the text1..."); // Log a message to the console

console.log("This is text1...");
const fs = require('fs').promises; // Import the 'fs' module with promises support again (redundant, already imported above)
fs.readFile('./text1.txt', 'utf8') // Asynchronously read the contents of 'text1.txt' file using promises
    .then((data) => {
        console.log(data); // Log the contents of the file
    })
    .catch((err) => {
        console.log("Error reading the file", err); // Log an error message if the file cannot be read
    });
console.log("This is the text2..."); // Log another message to the console
