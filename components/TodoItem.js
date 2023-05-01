import { useState } from "react"
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TodoItem({ item, deleteTodo }) {
	return (
		<View style={styles.item}>
			<Text style={styles.itemText}>{item.text}</Text>
			<TouchableHighlight onPress={() => deleteTodo(item.id)}>
				<MaterialIcons name="delete" style={styles.deleteButton} />
			</TouchableHighlight>
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
