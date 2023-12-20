import { createSlice } from "@reduxjs/toolkit";
import { products } from '../data/Products.data';

const productCardSlice = createSlice({
  name: 'products',
  initialState: products, 
  reducers: {


    cartAdd(state, action){
      const cartAdd = state.find(product => product.id === action.payload.id);
      cartAdd.isCart = !cartAdd.isCart;
    },

    favouriteAdd(state, action){
      const favouriteAdd = state.find(product => product.id === action.payload.id);
      if (favouriteAdd.class === 'regular'){
        favouriteAdd.class = 'favorite'
      }
      else{
        favouriteAdd.class = 'regular'
      }

    }

    
  }
});

export const {cartAdd, favouriteAdd } = productCardSlice.actions;

export default productCardSlice.reducer;
