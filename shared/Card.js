import { StyleSheet, View } from "react-native"

export default function (props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		margin: 40,
		marginRight: 0,
		borderLeftWidth: 0.5,
		borderLeftStyle: "solid",
		borderLeftColor: "#D904296F",
		flex: 1,
	},
	cardContent: {
		flex: 1,
		marginLeft: 20,
	},
})
