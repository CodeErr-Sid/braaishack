import foodModel from "../models/foodModel.js";
import fs from "fs";

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// get food details
const getFoodDetails = async (req, res) => {
  const { productId } = req.body;

  try {
    const food = await foodModel.findById(productId);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    res.json({ success: true, data: food });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

const getBulkFoods = async (req, res) => {
  const { cartItems } = req.body; // Expecting an object with id:quantity pairs


  console.log(req.body)

  try {
    // Extract item IDs from the cartItems object
    const itemIds = Object.keys(cartItems);

    // Fetch products based on itemIds
    const products = await foodModel.find({ _id: { $in: itemIds } });

    // Convert products to an object keyed by ID
    const productsById = products.reduce((acc, product) => {
      acc[product._id] = {
        ...product._doc,
        quantity: cartItems[product._id], // Add quantity to each product
      };
      return acc;
    }, {});

    res.json({success:true, data:productsById});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
}

// add food
const addFood = async (req, res) => {
  try {
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// delete food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { listFood, addFood, removeFood, getFoodDetails, getBulkFoods };
