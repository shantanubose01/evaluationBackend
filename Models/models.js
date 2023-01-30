const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name : 'String',
    email : 'String',
    gender : 'String',
    password : 'String'
})

const postschema = new mongoose.Schema({
    title : 'String',
    body : 'String',
    device : 'String'
})

const person = mongoose.model('person',userschema);
const post = mongoose.model('post',postschema);

module.exports = {person,post};
