const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: false,
        type: Number
    },
    post: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    jila: {
        required: true,
        type: String
    },
    whatsuappNumber: {
        required: false,
        type: Number
    },
    contactNumber: {
        required: true,
        type: Number
    },
    Email: {
        required: false,
        type: String
    },
    Category: {
        required: false,
        type: String
    },
    image: {
        required: false,
        type: String
    }


})
// const body = {
//     name: firstname,
//     post: post,
//     title: title,
//     jila: jila,
//     whatsuappNumber: number,
//     contactNumber: cnumber,
//     Email: Email,
//     Category: Category,
//     image: '',
//   };
module.exports = mongoose.model('Data', dataSchema)