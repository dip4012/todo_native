import moment from "moment"
import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
	name: "todos",
	initialState: [
		{
			text: "buy coffee",
			completed: false,
			created: "22/04/23",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra massa mollis lorem facilisis, et porta nisl vestibulum. Nulla sit amet sodales nulla. Duis et imperdiet magna. Proin tempor neque at eleifend feugiat. Vestibulum vestibulum sem eu magna finibus porta. Proin eget erat diam. Donec id tincidunt tellus. Ut aliquam, sem sit amet aliquam tempor, ex augue eleifend ex, ut feugiat nisl arcu quis est.",
			id: 1,
		},
		{
			text: "create an app",
			completed: true,
			created: "22/04/23",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra massa mollis lorem facilisis, et porta nisl vestibulum. Nulla sit amet sodales nulla. Duis et imperdiet magna. Proin tempor neque at eleifend feugiat. Vestibulum vestibulum sem eu magna finibus porta. Proin eget erat diam. Donec id tincidunt tellus. Ut aliquam, sem sit amet aliquam tempor, ex augue eleifend ex, ut feugiat nisl arcu quis est.",
			id: 2,
		},
		{
			text: "play with keys",
			completed: false,
			created: "22/04/23",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra massa mollis lorem facilisis, et porta nisl vestibulum. Nulla sit amet sodales nulla. Duis et imperdiet magna. Proin tempor neque at eleifend feugiat. Vestibulum vestibulum sem eu magna finibus porta. Proin eget erat diam. Donec id tincidunt tellus. Ut aliquam, sem sit amet aliquam tempor, ex augue eleifend ex, ut feugiat nisl arcu quis est.",
			id: 3,
		},
	],
	reducers: {
		addTodo: (state, action) => [
			...state,
			{
				...action.payload,
				completed: false,
				created: moment().format("D/MM/YYYY"),
				id: state.length + 1,
			},
		],

		deleteTodo: (state, action) =>
			state.filter((todo) => todo.id != action.payload),

		editTodo: (state, action) =>
			state.map((todo) =>
				todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
			),

		completeTodo: (state, action) =>
			state.map((todo) =>
				todo.id === action.payload ? { ...todo, completed: true } : todo
			),
	},
})

export const { addTodo, deleteTodo, editTodo, completeTodo } =
	todosSlice.actions
export default todosSlice.reducer
