import { useState } from "react"
import {
	Alert,
	FlatList,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/addTodo"

export default function App() {
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
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo addTodo={addTodo} />
					<View style={styles.todoList}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} deleteTodo={deleteTodo} />
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		padding: 20,
		paddingTop: 40,
	},
	todoList: {
		flex: 1,
		marginTop: 20,
	},
})
