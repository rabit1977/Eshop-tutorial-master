// Use constants for action types
// Use arrow functions for action creators
// Use async/await syntax and try/catch blocks for error handling

// add to wishlist
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const addToWishlist = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST, payload: data });

    localStorage.setItem(
      'wishlistItems',
      JSON.stringify(getState().wishlist.wishlist)
    );
    return data;
  } catch (error) {
    // handle any errors here
  }
};

// remove from wishlist
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const removeFromWishlist = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: data._id });
    localStorage.setItem(
      'wishlistItems',
      JSON.stringify(getState().wishlist.wishlist)
    );
    return data;
  } catch (error) {
    // handle any errors here
  }
};

/* Older code is down */

// // add to wishlist
// export const addToWishlist = (data) => async (dispatch, getState) => {
//     dispatch({
//       type: "addToWishlist",
//       payload: data,
//     });

//     localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
//     return data;
//   };

//   // remove from wishlist
//   export const removeFromWishlist = (data) => async (dispatch, getState) => {
//     dispatch({
//       type: "removeFromWishlist",
//       payload: data._id,
//     });
//     localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
//     return data;
//   };
