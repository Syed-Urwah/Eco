const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        require: true
    },
    img:{
        type: [String],
        require: true
    },
    categories:{
        type: Array
    },
    size:{
        type: String
    },
    color:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default: "draft"
    }
},{
    timestamps: true
})



const Product = mongoose.model("product", productSchema);
module.exports = Product 