import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TodoItem({ item, deleteTodo }) {
	return (
		<TouchableOpacity onPress={() => deleteTodo(item.id)}>
			<View style={styles.item}>
				<Text>{item.text}</Text>
				<MaterialIcons name="delete" size={24} color="darkred" />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
		marginTop: 20,
		backgroundColor: "#aaaaaa",
		borderRadius: 50,
		color: "white",
		fontSize: 16,
	},
})
