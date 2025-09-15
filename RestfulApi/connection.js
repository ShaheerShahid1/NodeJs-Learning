const mongoose = require ('mongoose');

//Connect With MongoDB
async function  connectMongoDB(url){

return mongoose.connect(url);

}

module.exports = {connectMongoDB};
