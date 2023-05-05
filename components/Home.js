import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { globalStyles } from "../shared/global"
import { useState } from "react"
import TodoItem from "./TodoItem"
import moment from "moment"
import { MaterialIcons } from "@expo/vector-icons"
import AddEditModal from "../shared/AddEditModal"

export default function Home({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false)
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

	const addTodo = (values) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{
				...values,
				completed: false,
				created: moment().format("D/MM/YYYY"),
				id: prevTodos.length + 1,
			},
		])
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
			<Pressable
				style={({ pressed }) => [
					{ backgroundColor: pressed ? "#ef233c" : "#d90429" },
					styles.addButton,
				]}
				onPress={() => {
					setModalVisible(true)
				}}
			>
				<MaterialIcons name="add" size={32} color="#EDF2F4" />
			</Pressable>

			<AddEditModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				onSubmitHandler={addTodo}
			/>

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
	addButton: {
		position: "absolute",
		right: 20,
		bottom: 20,
		padding: 15,
		borderRadius: 50,
		zIndex: 100,
		elevation: 5,
	},
})
