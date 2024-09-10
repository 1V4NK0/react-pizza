import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
/* basically it seems to be a bit different version of useContext, u have Provider as well and store is kinda ur context hook */
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});

export default store;
