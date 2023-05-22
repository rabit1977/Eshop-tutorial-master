// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the wishlist
const initialState = {
  wishlist: localStorage.getItem('wishlistItems')
    ? JSON.parse(localStorage.getItem('wishlistItems'))
    : [],
};

// Create a slice of the state for the wishlist
const wishlistSlice = createSlice({
  // Give the slice a name
  name: 'wishlist',
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Add an item to the wishlist
    addToWishlist: (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);
      if (isItemExist) {
        // Update the existing item in the wishlist
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        // Add the new item to the wishlist
        state.wishlist.push(item);
      }
    },

    // Remove an item from the wishlist
    removeFromWishlist: (state, action) => {
      // Filter out the item with the given id from the wishlist
      state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
    },
  },
});

// Export the reducer and action creators from the slice
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;




/* Older code is down */

// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: localStorage.getItem("wishlistItems")
//     ? JSON.parse(localStorage.getItem("wishlistItems"))
//     : [],
// };

// export const wishlistReducer = createReducer(initialState, {
//   addToWishlist: (state, action) => {
//     const item = action.payload;
//     const isItemExist = state.wishlist.find((i) => i._id === item._id);
//     if (isItemExist) {
//       return {
//         ...state,
//         wishlist: state.wishlist.map((i) =>
//           i._id === isItemExist._id ? item : i
//         ),
//       };
//     } else {
//       return {
//         ...state,
//         wishlist: [...state.wishlist, item],
//       };
//     }
//   },

//   removeFromWishlist: (state, action) => {
//     return {
//       ...state,
//       wishlist: state.wishlist.filter((i) => i._id !== action.payload),
//     };
//   },
// });
