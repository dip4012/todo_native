import { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>
				<Text style={styles.titleThin}>My </Text>
				<Text style={styles.titleThick}>Todos</Text>
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 38,
		backgroundColor: "#d90429",
		borderBottomLeftRadius: 70,
	},
	title: {
		color: "#EDF2F4",
		textAlign: "center",
		fontSize: 24,
	},
	titleThin: {
		fontWeight: 200,
	},
	titleThick: {
		fontWeight: 800,
	},
})