const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.cartTotalQuantity += 1;
      state.cartItems.push(action.payload);
      state.cartTotalAmount += action.payload.price * action.payload.quantity;
    },
    removeFromProduct: (state, action) => {
      state.cartTotalQuantity -= 1;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartTotalAmount += action.payload.price * action.payload.quantity;
    },
  },
});
export const { addProduct, removeFromProduct } = cartSlice.actions;
export default cartSlice.reducer;
