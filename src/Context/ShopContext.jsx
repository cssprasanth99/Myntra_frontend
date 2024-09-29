import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItem, setCartItem] = useState({});

  // Function to add an item to the cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product size");
      return;
    }

    let cartData = structuredClone(cartItem); // Clone current cart data

    // If the item already exists in the cart
    if (cartData[itemId]) {
      // If the size exists, increment the quantity
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        // Add size to the item if it doesn't exist
        cartData[itemId][size] = 1;
      }
    } else {
      // If the item does not exist, create a new entry
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
  };

  // Function to count the total number of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItem) {
      try {
        for (const size in cartItem[item]) {
          if (cartItem[item][size] > 0) {
            totalCount += cartItem[item][size];
          }
        }
      } catch (error) {
        console.error("Error calculating cart count:", error);
      }
    }
    return totalCount;
  };

  useEffect(() => {
    console.log("Cart Items:", cartItem);
  }, [cartItem]);

  // Context values
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount, // Ensure this is included
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
