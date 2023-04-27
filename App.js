import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", id: 1 },
		{ text: "create an app", id: 2 },
		{ text: "play with keys", id: 3 },
	])

	return (
		<View style={styles.container}>
			{/* header */}
			<View style={styles.content}>
				{/* todo form */}
				<View style={styles.todoList}>
					<FlatList
						data={todos}
						renderItem={({ item }) => <Text>{item.text}</Text>}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
			{/* footer */}
		</View>
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
	},
	todoList: {},
})
