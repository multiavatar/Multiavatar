const fs = require("fs");
const path = require("path");
const originalFile = fs.readFileSync(path.join(__dirname, "../multiavatar.min.js"));

if (!fs.existsSync(path.join(__dirname, "../dist"))) fs.mkdirSync(path.join(__dirname, "../dist"))

//TODO - use terser to minify builds

const umd = (content) => `
    (function (global, factory) {
        if (typeof define === "function" && define.amd) {
            define(factory());
        } else if (typeof module === "object" && module.exports) {
            module.exports = factory();
        } else {
            global.multiavatar = factory();
        }
    })(typeof self !== "undefined" ? self : this, function () {
        ${content};
        return multiavatar;
    })
`

fs.writeFileSync(path.join(__dirname, "../dist/multiavatar.es.js"), `${originalFile.toString()};export default multiavatar;`)
fs.writeFileSync(path.join(__dirname, "../dist/multiavatar.cjs"), `${originalFile};module.exports=multiavatar;`);
fs.writeFileSync(path.join(__dirname, "../dist/multiavatar.umd.js"), umd(originalFile));
