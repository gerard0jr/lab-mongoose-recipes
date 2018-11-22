const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: String,
    level: {
        type: String,
        enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
    },
    ingredients: Array,
    cuisine: {
        type: String,
        required: true
    },
    dishType: {
        type: String,
        enum: ['Breakfast','Dish','Snack','Drink','Dessert','Other']
    },
    image: {
        type: String,
        default: 'https://images.media-allrecipes.com/images/75131.jpg'
    },
    duration: {
        type: Number,
        min: 0
    },
    creator: String,
    created: {
        type: Date,
        default: new Date()
    }
},
    {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('Recipe',recipeSchema)