// console.log(this);
// let person = {
//   name: "Igor",
//   age: 31,
//   sayHi() {
//     console.log(`${this.name} says hello!!!`);
//   },
// };

// let admin = person;
// person = null;
// admin.sayHi();
// console.log(admin);

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log(this);
// });

// let count = 0;
// const timer = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// function FreshConstructor(title, description) {
//   this.title = title;
//   this.description = description;
//   this.method = function () {

//   }
// }

// FreshConstructor.prototype.nameAuthor = function(name) {
//   return name
// };

// class User {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }

//     sayHi() {
//         return ``
//     }
// }
// const postAboutNature = new FreshConstructor(
//   "About trees",
//   "This is about trees",
// );

// const postAboutAnimals = new FreshConstructor(
//   "About cats",
//   "This is about cats",
// );

// console.log(postAboutNature);
// console.log(postAboutAnimals.author);


// console.log(postAboutAnimals);



// const arr = [1, 2, 3, 4];


//call
const templateNum = {
    num: 5
}

function fn(a, b, c) {
    return this.num + a + b + c
}
//call принимает 2 параметра - копируемый контекст (объект) и аргумент функции (если есть)
console.log(fn.call(templateNum, 10, 4, 5))
console.log(fn.apply(templateNum, [1, 2, 3, 5]))

const arr = [4, 2, 1, 6, 22, 545, 333]
// const result = Math.max.apply(null, arr)
// console.log(result);
//apply не актуален в этом примере потому что существует спред оператор ...
const res = Math.max(...arr)
console.log(res);


function foo() {
  console.log(this.name)
}

const user = { name: 'Yury' }
const admin = { name: 'Admin' }

const bound = foo.bind(user)

bound.call(admin) // Yury