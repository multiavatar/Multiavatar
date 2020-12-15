const fs = require("fs");
const path = require("path");
const originalFile = fs.readFileSync(path.join(__dirname, "../multiavatar.min.js"));

if (!fs.existsSync(path.join(__dirname, "../dist"))) fs.mkdirSync(path.join(__dirname, "../dist"))

fs.writeFileSync(path.join(__dirname, "../dist/multiavatar.es.js"), `${originalFile.toString()};export default multiavatar;`)
fs.writeFileSync(path.join(__dirname, "../dist/multiavatar.cjs"), `${originalFile};module.exports=multiavatar;`);
