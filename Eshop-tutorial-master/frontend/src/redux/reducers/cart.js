// Import the createReducer and createSlice functions from Redux Toolkit
import { createReducer, createSlice } from "@reduxjs/toolkit";

// Define the initial state of the cart
const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

// Create a slice of the state for the cart
const cartSlice = createSlice({
  // Give the slice a name
  name: "cart",
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Add an item to the cart
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        // Update the existing item in the cart
        state.cart = state.cart.map((i) => (i._id === isItemExist._id ? item : i));
      } else {
        // Add the new item to the cart
        state.cart.push(item);
      }
    },
    // Remove an item from the cart
    removeFromCart: (state, action) => {
      // Filter out the item with the given id from the cart
      state.cart = state.cart.filter((i) => i._id !== action.payload);
    },
  },
});

// Export the reducer and action creators from the slice
export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;




/* Older Code down - refactored by me */


// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   cart: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
// };

// export const cartReducer = createReducer(initialState, {
//   addToCart: (state, action) => {
//     const item = action.payload;
//     const isItemExist = state.cart.find((i) => i._id === item._id);
//     if (isItemExist) {
//       return {
//         ...state,
//         cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
//       };
//     } else {
//       return {
//         ...state,
//         cart: [...state.cart, item],
//       };
//     }
//   },

//   removeFromCart: (state, action) => {
//     return {
//       ...state,
//       cart: state.cart.filter((i) => i._id !== action.payload),
//     };
//   },
// });



