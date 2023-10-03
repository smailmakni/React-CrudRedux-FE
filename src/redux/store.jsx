import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/ArticleSlice"
import scategoriesReducer from "../features/ScategoriesSlice"
import cartSliceReducer from "../features/CartSlice"
import authReducer from "../features/AuthSlice"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
const persistConfig = {
key: 'root',
version: 1,
storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories:scategoriesReducer,
storecart:cartSliceReducer,
auth:persistedReducer
},
middleware: [thunk]
})
export default store