import userModel from "../models/userModel.js"

// add to user cart  
const addToCart = async (req, res) => {
   try {
      let userData = await userModel.findOne({_id:req.body.userId});
      let cartData = await userData.cartData;
      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      }
      else {
         cartData[req.body.itemId] += 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId, {cartData});
      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" })
   }
}

// remove food from user cart
const removeFromCart = async (req, res) => {
   try {
       // Fetch user data
       let userData = await userModel.findById(req.body.userId);
       let cartData = userData.cartData;

       // Check if the item exists in the cart
       if (cartData[req.body.itemId] !== undefined) {
           // Remove the item from the cartData object
           delete cartData[req.body.itemId];

           // Update the user's cart in the database
           await userModel.findByIdAndUpdate(req.body.userId, { cartData });

           res.json({ success: true, message: "Item removed from cart" });
       } else {
           res.json({ success: false, message: "Item not found in cart" });
       }
   } catch (error) {
       console.log(error);
       res.status(500).json({ success: false, message: "Error removing item from cart" });
   }
};


// get user cart
const getCart = async (req, res) => {
   try {
       let userData = await userModel.findById(req.body.userId);
       let cartData = userData.cartData;

       // Remove items with quantity of 0
       for (let itemId in cartData) {
           if (cartData[itemId] === 0) {
               delete cartData[itemId];
           }
       }

       // Update the user's cart data in the database
       await userModel.findByIdAndUpdate(req.body.userId, { cartData });

       res.json({ success: true, cartData: cartData });
   } catch (error) {
       console.log(error);
       res.json({ success: false, message: "Error" });
   }
};

 


export { addToCart, removeFromCart, getCart }