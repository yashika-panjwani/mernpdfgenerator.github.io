// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/authSlice';
// import productReducer from './features/productSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     products: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import productReducer from './features/productSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
