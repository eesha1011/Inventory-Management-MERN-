import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    quantity: {
        type: Number,
        default: 1,
        min: 0,
    },
    image: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    }
},
{
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema); 

export default Product;
