import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = import.meta.env.VITE_BACKEND_URL;
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const currency = "£";
    const deliveryCharge = 50;

    const getTotalItemCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };

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

    // const removeFromCart = async (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    //     if (token) {
    //         await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    //     }
    // }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
                if (cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => product._id === item);
                    totalAmount += itemInfo.price * cartItems[item];
                }
            } catch (error) {
                console.log(error);
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

    const loadProductData = async (cartItems = {}) => {
        try {
            // Check if cartItems is empty or invalid
            if (!cartItems || typeof cartItems !== 'object' || Array.isArray(cartItems) || Object.keys(cartItems).length === 0) {
                return 'Cart is empty'; // Handle empty cart case
            }

            // Send a POST request with cartItems in the request body
            const response = await axios.post(url + "/api/food/list/bulk", { cartItems });
            return response.data;
        } catch (error) {
            console.error('Error loading product data:', error.message);
            throw error;
        }
    };

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    useEffect(() => {
        const fetchFoodList = async () => {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data)
        }

        fetchFoodList()
    }, [])

    // const getTotalItemCount = () => {
    //     let totalCount = 0;
    //     for (const item in cartItems) {
    //         totalCount += cartItems[item];
    //     }
    //     return totalCount;
    // };


        // Updated removeFromCart function
        const removeFromCart = async (itemId) => {
            setCartItems((prev) => {
                const updatedCart = { ...prev };
                if (updatedCart[itemId] > 1) {
                    updatedCart[itemId] -= 1; // Decrease quantity by 1
                } else {
                    delete updatedCart[itemId]; // Remove item from cart if quantity is 1 or less
                }
                return updatedCart;
            });
    
            if (token) {
                try {
                    await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
                    console.log(`Item ${itemId} removed from cart on server.`);
                } catch (error) {
                    console.error("Error removing item from cart:", error);
                }
            }
        };
    

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalItemCount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        loadProductData,
        fetchFoodList
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;