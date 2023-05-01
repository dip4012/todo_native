import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Home"
import TodoDetails from "./TodoDetails"

const Stack = createStackNavigator()

export default function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					flex: 1,
					backgroundColor: "transparent",
				},
				headerShown: false,
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="TodoDetails" component={TodoDetails} />
		</Stack.Navigator>
	)
}
