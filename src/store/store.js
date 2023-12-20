import { configureStore } from "@reduxjs/toolkit";
import productCardSlice from './/productCardSlice'


export default configureStore({
  reducer: {
    products: productCardSlice,
  }
})