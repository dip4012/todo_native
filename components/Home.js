import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { globalStyles } from "../shared/global"
import { useState } from "react"
import TodoItem from "./TodoItem"
import { MaterialIcons } from "@expo/vector-icons"
import AddEditModal from "../shared/AddEditModal"
import { useSelector, useDispatch } from "react-redux"

export default function Home({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false)
	const todos = useSelector((state) => state.todos)
	const dispatch = useDispatch()

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
			/>

			<View style={styles.todoList}>
				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<TodoItem itemId={item.id} navigation={navigation} />
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
