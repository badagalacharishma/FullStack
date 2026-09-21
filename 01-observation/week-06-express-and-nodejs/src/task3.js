// demo of using third party npm packages
// run npm install moment before execution
const moment = require('moment');
console.log("Current formatted date using moment.js:");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));