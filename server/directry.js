let fs = require('fs');
function fileHandling(username, text) {
    if (!fs.existsSync(`${username}`)) {
        fs.mkdirSync(`${username}`);
    }
    fs.writeFileSync(`./${username}/${username}-${Date.now()}-${Math.ceil(Math.random() * 100000)}.txt`, text, 'utf-8');
}
fileHandling("sritama", "i am a girl.");
fileHandling("debottam", "i am a boy.");

// function deleteFiles(username) {
//     if (fs.existsSync(`${username}`)) {
//         fs.readdirSync(`${username}`).forEach(file => {
//             fs.unlinkSync(`${username}/${file}`);
//         });
//         fs.rmdirSync(`${username}`);
//     }
// }
// deleteFiles("sritama");
// deleteFiles("debottam");

// function deleteFiles(username) {
//     if (fs.existsSync(`${username}`)) {
//         fs.readdir(`${username}`, (err, files) => {
//             if (err) {
//                 console.error("Error reading directory:", err);
//                 return;
//             }
//             files.forEach(file => {
//                 fs.unlink(`${username}/${file}`, err => {
//                     if (err) {
//                         console.error("Error deleting file:", err);
//                         return;
//                     }
//                 });
//             });
//             fs.rmdir(`${username}`, err => {
//                 if (err) {
//                     console.error("Error removing directory:", err);
//                 }
//             });
//         });
//     }
// }
// deleteFiles("sritama");
// deleteFiles("debottam");