import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TodoItem({
	item,
	deleteTodo,
	completeTodo,
	navigation,
}) {
	return (
		<View style={styles.item}>
			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={() =>
					navigation.navigate("TodoDetails", {
						...item,
						deleteTodo: deleteTodo,
						completeTodo: completeTodo,
					})
				}
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
