import "react-native-gesture-handler"
import { useState } from "react"
import {
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Header from "./shared/Header"
import HomeStack from "./components/HomeStack"

export default function App() {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.rootContainer}>
				<NavigationContainer>
					<Header />
					<HomeStack />
				</NavigationContainer>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		backgroundColor: "#2b2d42",
	},
})
