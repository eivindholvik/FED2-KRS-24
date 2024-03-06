import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
}

// Hvis typescript
// interface Product {
//   id: Number,
//   name: String,
//   price: number
// }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProductIndex = state.products.findIndex((ele) => ele.product.id === payload.id);
      if (existingProductIndex === -1) {
        return { ...state, products: [...state.products, { product: payload, amount: 1 }] }
      } else {
        state.products[existingProductIndex].amount++
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;