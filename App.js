import "react-native-gesture-handler"
import {
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Header from "./shared/Header"
import HomeStack from "./components/HomeStack"
import { Provider } from "react-redux"
import store from "./redux/store"

export default function App() {
	return (
		<Provider store={store}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.rootContainer}>
					<NavigationContainer>
						<Header />
						<HomeStack />
					</NavigationContainer>
				</View>
			</TouchableWithoutFeedback>
		</Provider>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		backgroundColor: "#2b2d42",
	},
})
