import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/ArticleSlice"
import scategoriesReducer from "../features/ScategoriesSlice"

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories:scategoriesReducer,
}
})
export default store