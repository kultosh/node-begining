// const name = 'Tom';

// console.log(name);
var test = 'Tom'
var footballer = 'Neymar Jr'

const greet = (name) => {
    console.log(`Hello, ${name}`);
}

const best = (name) => {
    greet(test);
    console.log(` best dribller -> ${name}`);
}

best(footballer);