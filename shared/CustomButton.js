import { TouchableOpacity, View } from "react-native"

export default function CustomButton({
	title,
	backgroundColor,
	titleColor,
	onPressHandler,
}) {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<View style={[{ backgroundColor: backgroundColor }, styles.button]}></View>
		</TouchableOpacity>
	)
}
