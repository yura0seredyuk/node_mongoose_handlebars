const { Router } = require('express');
const router = Router();
const Order = require('../models/order')

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({
      'user.userId': req.user._id
    }).populate('user.userId')

    const newOrders = orders.map(o => {
        return {
          ...o._doc,
          price: o.courses.reduce((total, c) => {
            return total += c.count * c.course.price
          }, 0)
        }
      })

    res.render('orders', {
      isOrders: true,
      title: 'Orders',
      orders: newOrders
    }) 
  } catch (error) {
    console.log(error);
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await req.user.populate('cart.items.courseId')

    const courses = user.cart.items.map(i => ({
      count: i.count,
      course: { ...i.courseId._doc }
    }))

    const order = new Order({
      user: {
        name: req.user.name,
        userId: req.user
      },
      courses: courses
    })

    await order.save();
    await user.clearCart();

    res.redirect('/orders');
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
