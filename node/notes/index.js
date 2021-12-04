const { user, seyHello } = require('./user');
const path = require('path');
const fs = require('fs');
const os = require('os');
const EventEmiitter = require('events');

// console.log(user);
// seyHello();

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// console.log(path.join(__dirname, 'test', 'index.js'));
// console.log(path.resolve(__dirname, 'test', 'index.js'));

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw new Error(err);

//   console.log('dir was created');
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'note.txt'),
//   'hello',
//   (err) => {
//     if(err) throw new Error(err);

//     console.log('file was created');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'note.txt'),
//       'new note',
//       (err) => {
//         if (err) throw new Error(err);

//         console.log('file was edited');
//       }
//     )
//   }
// )

// fs.readFile(
//   path.join(__dirname, 'notes', 'note.txt'),
//   (err, data) => {
//     if (err) throw new Error(err);

//     console.log(Buffer.from(data).toString());
//   }
// )


// fs.readFile(
//   path.join(__dirname, 'notes', 'note.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw new Error(err);

//     console.log(data);
//   }
// )

// fs.rename(
//   path.join(__dirname, 'notes', 'Mynote.txt'),
//   path.join(__dirname, 'notes', 'note.txt'),
//   err => {
//     if (err) throw err;

//     console.log('file was renamed');
//   }
// )

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.uptime());


 
// class Logger extends EventEmiitter {
//   log(message) {
//     this.emit('message', `${message} ${new Date()}`);
//   }
// }

// const logger = new Logger()

// logger.on('message', data => {
//   console.log(data);
// })

// logger.log('hello');
