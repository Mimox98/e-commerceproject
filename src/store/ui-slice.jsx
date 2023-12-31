// Import necessary dependencies
import { createSlice } from "@reduxjs/toolkit";

// Create a UI slice for managing UI-related state
const uiSlice = createSlice({
    name: 'uiSlice&GuestLogin', // Specify the name of the slice
    initialState: {
        navigationTab: '', // Initial state for the navigation tab
        guestLoginAuthentication: false, // Initial state for guest login authentication
        nightOrDarkMode: false, // Initial state for night or dark mode (not implemented in this code)
    },
    reducers: {
        modifiyNavigationTab(state, action) {
            // Reducer to modify the navigation tab state
            const { navigationHandler } = action.payload;
            state.navigationTab = navigationHandler; // Update the navigation tab state
        },
        authenticateAsGuest(state, action) {
            // Reducer to set guest login authentication state
            state.guestLoginAuthentication = action.payload; // Update the guest login authentication state
        },
        turnOnDarkMode(state) {
            // Reducer for turning on dark mode (not implemented in this code)
            // You can implement this part to handle dark mode
        },
    },
});

export const uiAction = uiSlice.actions; // Export the actions generated by the slice
export default uiSlice; // Export the UI slice for use in your Redux store
