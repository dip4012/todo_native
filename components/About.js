import { Text, View } from "react-native"
import { globalStyles } from "../shared/global"

export default function ({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Text>This is about container</Text>
		</View>
	)
}
