const path = require('path');
const express = require('express');
const app = express();

const mainRouter = require('./routes/home');
const coursesRouter = require('./routes/courses');
const addRouter = require('./routes/add');
const cartRouter = require('./routes/cart');

const mongoose = require('mongoose');

var exphbs  = require('express-handlebars');

const User = require('./models/user');

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
})

app.use( async (req, res, next) => {
  try {
    const user = await User.findById('61ab85f9eb2cd63dead872e5');
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use('/', mainRouter);
app.use('/courses', coursesRouter);
app.use('/add', addRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    const pass = 'admin'
    const url = `mongodb+srv://admin:${pass}@cluster0.iyd6u.mongodb.net/shop`;

    await mongoose.connect(url, { useNewUrlParser: true });

    const candidate = await User.findOne();

    if (!candidate) {
      const user = new User({
        email: 'yura.seredyuk0@gmail.com',
        name: 'Yurii',
        cart: { items: [] }
      })

      await user.save();
    }

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    }) 
  } catch (error) {
    console.log(error);
  }
}

start();
