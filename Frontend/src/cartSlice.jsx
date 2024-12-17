// // src/cartSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the cart
// const initialState = {
//   items: [],
// };

// // Create a slice for the cart
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       // Check if the item is already in the cart
//       const existingItem = state.items.find((i) => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1; // Increment the quantity if item already exists
//       } else {
//         state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
