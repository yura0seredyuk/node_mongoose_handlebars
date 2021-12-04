const {Router} = require('express');
const Course = require('../models/course');

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200)
  res.render('add', {
    title: 'Add course',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  // const course = new Course(req.body.title, req.body.price, req.body.img);
  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    userId: req.user
  })

  try {
    await course.save();

    res.redirect('/courses');
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
 