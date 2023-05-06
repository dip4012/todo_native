import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todoSlice"

export default store = configureStore({
	reducer: {
		todos: todosReducer,
	},
})
