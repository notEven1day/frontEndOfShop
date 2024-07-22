import { createSlice } from '@reduxjs/toolkit';

// Initial state of the user
const initialState = {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profilePicUrl: "",
    role: "",
};

// Create a slice for user management
export const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState,
    reducers: {
        // Action to set user ID
        setId: (state, action) => {
            state.id = action.payload;
        },
        // Action to clear user ID
        clearId: (state) => {
            state.id = "";
        },
        // Action to set username
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        // Action to clear username
        clearUsername: (state) => {
            state.username = "";
        },
        // Action to set first name
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        // Action to clear first name
        clearFirstName: (state) => {
            state.firstName = "";
        },
        // Action to set last name
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        // Action to clear last name
        clearLastName: (state) => {
            state.lastName = "";
        },
        // Action to set email
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        // Action to clear email
        clearEmail: (state) => {
            state.email = "";
        },
        // Action to set phone number
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        // Action to clear phone number
        clearPhoneNumber: (state) => {
            state.phoneNumber = "";
        },
        // Action to set profile picture URL
        setProfilePicUrl: (state, action) => {
            state.profilePicUrl = action.payload;
        },
        // Action to clear profile picture URL
        clearProfilePicUrl: (state) => {
            state.profilePicUrl = "";
        },
        // Action to set role
        setRole: (state, action) => {
            state.role = action.payload;
        },
        // Action to clear role
        clearRole: (state) => {
            state.role = "";
        },
        // Action to clear all user data
        clearUser: (state) => {
            Object.keys(initialState).forEach(key => {
                state[key] = "";
            });
        },
    },
});

// Export actions for use in components
export const {
    setId,
    clearId,
    setUsername,
    clearUsername,
    setFirstName,
    clearFirstName,
    setLastName,
    clearLastName,
    setEmail,
    clearEmail,
    setPhoneNumber,
    clearPhoneNumber,
    setProfilePicUrl,
    clearProfilePicUrl,
    setRole,
    clearRole,
    setCartId,
    clearCartId,
    clearUser,
} = userSlice.actions;

// Export reducer to be included in the store
export default userSlice.reducer;
