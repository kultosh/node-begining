// const xyz = require('./people');
// console.log(xyz.people, xyz.ages);

// OR---------------------------------------
const {people,ages} = require('./people');
console.log(people,ages);

// To know the details of your os 
const os = require('os');
console.log('Platform =>', os.platform(), ', Home Directory =>', os.homedir());