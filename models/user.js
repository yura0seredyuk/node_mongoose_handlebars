const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  cart: {
    items: [
      {
        count: {
          required: true,
          type: Number,
          default: 1
        },
        courseId: {
          required: true,
          type: Schema.Types.ObjectId,
          ref: 'Course'
        }
      }
    ]
  }
})

userSchema.methods.addToCart = function(course) {
  const clonedItems = [...this.cart.items];
  const index = clonedItems.findIndex(c => {
    return c.courseId.toString() === course._id.toString();
  })

  console.log(clonedItems, index)

  if (index >= 0) {
    clonedItems[index].count = clonedItems[index].count + 1;
  } else {
    clonedItems.push({
      courseId: course._id,
      count: 1
    })
  }

  const newCart = { items: clonedItems }

  this.cart = newCart;

  return this.save();
}

userSchema.methods.removeFromCart = function(id) {
  let clonedItems = [...this.cart.items];
  const index = clonedItems.findIndex(c=> {
    return c.courseId.toString() === id.toString()
  })

  if (clonedItems[index].count === 1) {
    clonedItems = clonedItems.filter(c => c.courseId.toString() !== id.toString());
  } else {
    clonedItems[index].count--
  }

  this.cart = { items: clonedItems }

  return this.save();
}

module.exports = model('User', userSchema);
