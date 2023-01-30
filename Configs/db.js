const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
async function ConnectDatabase(){
    const result = mongoose.connect(`mongodb+srv://shan:shantanu@cluster0.hxigotx.mongodb.net/?retryWrites=true&w=majority`);
    return result;
}
module.exports = ConnectDatabase ;