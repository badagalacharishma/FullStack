// exploring path and os modules for observation
const os = require('os');
const path = require('path');
console.log("System OS: " + os.type());
console.log("Memory left: " + os.freemem());
console.log("Path joined: " + path.join(__dirname, 'test', 'file.txt'));