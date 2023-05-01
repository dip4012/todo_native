import { FlatList, StyleSheet, View } from "react-native"
import { globalStyles } from "../shared/global"
import AddTodo from "./addTodo"
import { useState } from "react"
import TodoItem from "./TodoItem"

export default function Home() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", id: 1 },
		{ text: "create an app", id: 2 },
		{ text: "play with keys", id: 3 },
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

	return (
		<View style={[globalStyles.container, { backgroundColor: "#2b2d42" }]}>
			{/* <AddTodo addTodo={addTodo} /> */}

			<View style={styles.todoList}>
				<FlatList
					data={todos}
					renderItem={({ item }) => <TodoItem item={item} deleteTodo={deleteTodo} />}
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
