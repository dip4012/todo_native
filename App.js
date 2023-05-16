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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import About from "./components/About"
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.rootContainer}>
					<NavigationContainer>
						<Tab.Navigator
							initialRouteName="HomeStack"
							backBehavior="history"
							screenOptions={{
								tabBarShowLabel: false,
								tabBarStyle: {
									backgroundColor: "#d90429",
									borderRadius: 20,
									margin: 10,
								},
							}}
						>
							<Tab.Screen
								name="HomeStack"
								component={HomeStack}
								options={{
									header: () => <Header />,
									tabBarIcon: ({ focused }) =>
										focused ? (
											<Ionicons name="home" size={24} color="#edf2f4" />
										) : (
											<Ionicons name="home-outline" size={24} color="#edf2f4" />
										),
								}}
							/>
							<Tab.Screen
								name="About"
								component={About}
								options={{
									tabBarIcon: ({ focused }) =>
										focused ? (
											<FontAwesome name="user" size={24} color="#edf2f4" />
										) : (
											<FontAwesome name="user-o" size={24} color="#edf2f4" />
										),
								}}
							/>
						</Tab.Navigator>
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
