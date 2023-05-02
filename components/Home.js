import { FlatList, StyleSheet, View } from "react-native"
import { globalStyles } from "../shared/global"
import AddTodo from "./addTodo"
import { useState } from "react"
import TodoItem from "./TodoItem"

export default function Home({ navigation }) {
	const [todos, setTodos] = useState([
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
	])

	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
	}

	const addTodo = (text) => {
		if (text.length > 3) {
			setTodos((prevTodos) => [
				...prevTodos,
				{ text: text, id: prevTodos.length + 1 },
			])
		} else {
			Alert.alert("Ooops!!", "Todo must be atleast 4 characters in length", [
				{ text: "Understood", onPress: () => {} },
			])
		}
	}

	const completeTodo = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => ({
				...todo,
				completed: todo.id === id ? !todo.completed : todo.completed,
			}))
		)
	}

	return (
		<View style={globalStyles.container}>
			{/* <AddTodo addTodo={addTodo} /> */}

			<View style={styles.todoList}>
				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<TodoItem
							item={item}
							deleteTodo={deleteTodo}
							completeTodo={completeTodo}
							navigation={navigation}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	todoList: {
		flex: 1,
		marginTop: 10,
	},
})
