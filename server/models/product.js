const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id:{
        type: Number,
        required: true,
    },
    product_name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    img:{
        data:Buffer,
        contentType:String
    },
    desc:{
        type: String,
        required: true,
    }
})

const productModel = mongoose.model("Products", productSchema);
module.exports = productModel;