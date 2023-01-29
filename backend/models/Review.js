const mongoose = require("mongoose")

const Review = new mongoose.Schema({
    album_name : {
        type: String,
        unique:false
    },
    user_name:{
        type: String ,
        required : true,
    },
    review:{
        type: String ,
        required : true
    },
    rating: {
        type: Number,
        required: true
    }
}
);



module.exports= mongoose.model("Review",Review);