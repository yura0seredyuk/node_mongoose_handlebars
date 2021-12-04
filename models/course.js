// const { v4 } = require('uuid');
// const fs = require('fs');
// const path = require('path');

// class Course {
//   constructor(title, price, img) {
//     this.title = title;
//     this.price = price;
//     this.img = img;
//     this.id = v4();
//   }

//   toJSON() {
//     return {
//       id: this.id,
//       title: this.title,
//       price: this.price,
//       img: this.img
//     }
//   }

//   static async update(course) {
//     const courses = await Course.getAll(); 

//     const index = courses.findIndex(c => c.id === course.id);
    
//     courses[index] = course;

//     return new Promise((res, rej) => {
//       fs.writeFile(
//         path.join(__dirname, '..', 'data', 'courses.json'),
//         JSON.stringify(courses),
//         (err) => {
//           if (err) rej(err);
//           res()
//         }
//       )
//     })
//   }

//   async save() {
//     const courses = await Course.getAll();

//     courses.push(this.toJSON());

//     return new Promise((res, rej) => {
//       fs.writeFile(
//         path.join(__dirname, '..', 'data', 'courses.json'),
//         JSON.stringify(courses),
//         (err) => {
//           if (err) rej(err);
//           res()
//         }
//       )
//     })
//   }

//   static getAll() {
//     return new Promise((res, rej) => {
//       fs.readFile(
//         path.join(__dirname, '..', 'data', 'courses.json'),
//         'utf-8',
//         (err, content) => {
//           if (err) rej(err);
//           res(JSON.parse(content));
//         }
//       )
//     })
//   }

//   static async getById(id) {
//     const courses = await Course.getAll();

//     return courses.find(c => c.id === id);
//   }
// }

// module.exports = Course;

const { Schema, model } = require('mongoose');

const course = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

// course.method('toClient', function() {
//   const course = this.toObject();

//   course.id === course._id
//   delete course._id
// })

module.exports = model('Course', course);
