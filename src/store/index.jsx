// Import necessary dependencies and components
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice"; // Import the cart slice (reducer)
import uiSlice from "./ui-slice"; // Import the UI slice (reducer)

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        CartProducts: cartSlice.reducer, // Add the cart slice reducer to the store
        UiReducer: uiSlice.reducer // Add the UI slice reducer to the store
    }
});

export default store; // Export the Redux store for use in your application
