import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TodoItem({ item, deleteTodo, navigation }) {
	console.log(item)
	return (
		<View style={styles.item}>
			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={() => navigation.navigate("TodoDetails", item)}
			>
				<Text style={styles.itemText}>{item.text}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => deleteTodo(item.id)}>
				<View style={{ borderRadius: 50 }}>
					<MaterialIcons name="delete" style={styles.deleteButton} />
				</View>
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
		marginRight: 8,
		borderRadius: 50,
		borderWidth: 0.5,
		borderStyle: "solid",
		borderColor: "#EDF2F4",
		color: "#EDF2F4",
		fontSize: 14,
		fontWeight: 300,
		backgroundColor: "#222334",
	},
	deleteButton: {
		color: "#EDF2F4",
		fontSize: 24,
		padding: 12,
		backgroundColor: "#EF233C",
		borderRadius: 50,
	},
})
