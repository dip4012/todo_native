import { StyleSheet, TouchableOpacity, View } from "react-native"

export default function CustomButton({
	children,
	backgroundColor,
	onPressHandler,
}) {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<View style={[styles.buttton, { backgroundColor: backgroundColor }]}>
				{children}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttton: {
		flexDirection: "row",
		gap: 10,
		padding: 16,
		borderRadius: 50,
	},
})
