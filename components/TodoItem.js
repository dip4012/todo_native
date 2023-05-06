import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"

export default function TodoItem({ itemId, navigation }) {
	const item = useSelector((state) =>
		state.todos.filter((todo) => todo.id === itemId)
	)[0]

	return (
		<View style={styles.item}>
			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={() => navigation.navigate("TodoDetails", { itemId: item.id })}
			>
				<Text
					style={[
						styles.itemText,
						item.completed ? styles.itemCompleted : styles.itemPending,
					]}
				>
					{item.text}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginTop: 20,
	},
	itemText: {
		flex: 1,
		padding: 14,
		borderRadius: 50,
		borderWidth: 0.5,
		borderStyle: "solid",
		fontSize: 14,
		fontWeight: 300,
		backgroundColor: "#222334",
	},
	itemCompleted: {
		borderColor: "#99d98c",
		color: "#99d98c",
	},
	itemPending: {
		borderColor: "#ffba08",
		color: "#ffba08",
	},
})
