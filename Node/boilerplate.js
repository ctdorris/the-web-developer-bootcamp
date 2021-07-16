const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', {recursive: true}, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, 'html');
    fs.writeFileSync(`${folderName}/app.js`, 'js');
    fs.writeFileSync(`${folderName}/styles.css`, 'css');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}
