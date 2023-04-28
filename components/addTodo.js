import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

export default function AddTodo({ addTodo }) {
	const [text, setText] = useState("")

	const changeHandler = (val) => {
		setText(val)
	}

	const submitHandler = () => {
		addTodo(text)
		setText("")
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="add todo..."
				onChangeText={changeHandler}
				value={text}
			/>
			<Button onPress={submitHandler} color="coral" title="+ Add" />
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderColor: "coral",
		borderRadius: 10,
		backgroundColor: "#eee",
		fontStyle: "italic",
	},
})
