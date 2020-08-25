// Global Object
// console.log(global);

global.setTimeout(() => {
  console.log('Time Up!');  
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('Appear time and again!')
}, 1000);

// To get current directory path
console.log(__dirname);

// To get current file path
console.log(__filename);