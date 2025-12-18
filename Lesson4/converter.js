const usdCourse = 90; 
const euroCourse = 100;

const product = (a, b) => a * b;

const usdToRub = (usd) => {
    return (` ${usd}$ = ${product(usdCourse, usd)} руб.`);
}

const euroToRub = (euro) => {
    return (`${euro}€ = ${product(euroCourse, euro)} руб.`);
}

console.log(usdToRub(10),'\n', euroToRub(20));
