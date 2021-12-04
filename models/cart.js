// const path = require('path');
// const fs = require('fs');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'cart.json'
// )

// class Cart {
//   static async add(course) {
//     const cart = await Cart.fetch();

//     const index = cart.courses.findIndex(c => c.id === course.id);
//     const candidate = cart.courses[index];

//     if (candidate) {
//       // already exist
//       candidate.count++;
//       cart.courses[index] = candidate;
//     } else {
//       // need add
//       course.count = 1;
//       cart.courses.push(course);
//     }

//     cart.price += +course.price;

//     return new Promise((res, rej) => {
//       fs.writeFile(p, JSON.stringify(cart), err => {
//         if (err) {
//           rej(err);
//         } else {
//           res();
//         }
//       })
//     })
//   }

//   static async remove(id) {
//     const cart = await Cart.fetch();

//     const index = cart.courses.findIndex(c => c.id === id);
//     const course = cart.courses[index];

//     if (course.count === 1) {
//       // delete
//       cart.courses = cart.courses.filter(c => c.id !== id)
//     } else {
//       // decrease count
//       cart.courses[index].count--
//     }

//     cart.price -= course.price;

//     return new Promise((res, rej) => {
//       fs.writeFile(p, JSON.stringify(cart), err => {
//         if (err) {
//           rej(err);
//         } else {
//           res(cart);
//         }
//       })
//     })
//   }

//   static async fetch() {
//     return new Promise((res, rej) => {
//       fs.readFile(p, 'utf-8', (err, content) => {
//         if (err) rej(err);
//         res(JSON.parse(content));
//       })
//     })
//   }
// }

// module.exports = Cart;
