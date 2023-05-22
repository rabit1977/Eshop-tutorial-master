// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the reducers from the slices
import { userReducer } from './reducers/user';
import { sellerReducer } from './reducers/seller';
import { productReducer } from './reducers/product';
import { eventReducer } from './reducers/event';
import { cartReducer } from './reducers/cart';
import { wishlistReducer } from './reducers/wishlist';
import { orderReducer } from './reducers/order';

// Create a store with the reducers
const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

// Export the store
export default Store;
