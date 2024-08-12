import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    console.log(cartItems)

    const addToCart = async (itemId, quantity = 1) => {
        console.log("addToCart called with itemId:", itemId);  // Log the itemId passed to the function
        console.log("Quantity:", quantity);  // Log the quantity passed to the function
        
        // Check if itemId exists in cartItems
        console.log("Current cartItems:", cartItems);  // Log current cartItems
        
        if (!cartItems[itemId]) {
            console.log(`Item ${itemId} not in cart, adding with quantity ${quantity}.`);
            setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
        } else {
            console.log(`Item ${itemId} already in cart, updating quantity.`);
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
        }
    
        // Check if token is present
        if (token) {
            console.log("Token found, sending request to add item to cart.");
            try {
                const response = await axios.post(url + "/api/cart/add", { itemId, quantity }, { headers: { token } });
                console.log("Response from server:", response.data);  // Log the server response
            } catch (error) {
                console.error("Error adding item to cart:", error);  // Log any error from the server
            }
        } else {
            console.log("No token found, skipping server request.");
        }
    };
    
    

    console.log(food_list)

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    // products rendering

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;