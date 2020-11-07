const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductModel = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true,
        maxlength: 5
    },
    stock: {
        type: Number,
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Product", ProductModel);