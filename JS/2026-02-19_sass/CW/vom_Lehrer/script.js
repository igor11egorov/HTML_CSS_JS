// setTimeout(() => {
//   console.log('1 sec delay');
// }, 0)
// let count = 0
// console.log(1)
// console.log(2)
// console.log('mid operation');
// const interval = setInterval(( )=> {
//   count++
//   console.log(count);
//   if(count === 5) {
//     console.log('end of operation');
//     clearInterval(interval)
//   }
// }, 0)
// console.log(3)
// console.log(4)

// function multiply(a, b) {
//     return a * b
// }

// function square(n) {
//     console.log(n);
//     return multiply(n, n)
// }

// function printSquare(n) {
//     const result = square(n)
//     console.log(result)
// }

// printSquare(5)

// console.log(1)
// setTimeout(() => {
// console.log('hello web api');

// }, 1000)
// console.log(2)
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 2");
});

console.log("end");
