import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/ArticleSlice"
import scategoriesReducer from "../features/ScategoriesSlice"
import cartSliceReducer from "../features/CartSlice"
import authReducer from "../features/AuthSlice"

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories:scategoriesReducer,
storecart:cartSliceReducer,
auth:authReducer
}
})
export default store