import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid product ID",
    });
  }
}


export const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
        )

        if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
        }

        res.status(200).json({
        success: true,
        message: "Product updated",
        product,
        })
    } catch (error) {
        res.status(400).json({
        success: false,
        message: error.message,
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid product ID",
        })
    }
}