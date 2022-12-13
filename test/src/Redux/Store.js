
 import { configureStore } from "@reduxjs/toolkit";
 import todoReducer from './Reducer';

 const store = configureStore({
   reducer: {
     todo: todoReducer,
   },
 });

 export default store;