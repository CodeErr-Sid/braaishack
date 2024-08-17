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


const addFoods= async (foodData) => {
  try {
    const food = new foodModel({
      name: foodData.name,
      description: foodData.description,
      price: foodData.price,
      category: foodData.category,
      image: foodData.image,
    });
    await food.save();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error saving food item" };
  }
};

// Define the bulk upload method
const uploadBulkFoods = async (req, res) => {
  const { foods } = req.body;

  if (!Array.isArray(foods) || foods.length === 0) {
    return res.status(400).json({ success: false, message: "No food items provided" });
  }

  try {
    // Track success and failure counts
    let successCount = 0;
    let failureCount = 0;
    const results = [];

    for (const foodData of foods) {
      const result = await addFoods(foodData);
      if (result.success) {
        successCount++;
      } else {
        failureCount++;
      }
      results.push(result);
    }

    res.json({
      success: true,
      message: `Bulk upload completed: ${successCount} items added, ${failureCount} failed`,
      results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error during bulk upload" });
  }
};

export { listFood, addFood, removeFood, getFoodDetails, getBulkFoods, uploadBulkFoods };
