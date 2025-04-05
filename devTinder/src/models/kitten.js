const mongoose = require('mongoose')
const {Schema} = mongoose


const kittenSchema = new Schema({
    name:String,
})

kittenSchema.methods.speak = () =>{
    const greeting = this.name ? 'Meow name is'+this.name : 'I don\'t have a name'
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittenSchema)

module.exports = Kitten;