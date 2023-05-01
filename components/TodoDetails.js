import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../shared/global"
import Card from "../shared/Card"
import { MaterialIcons } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"

export default function TodoDetails({ route }) {
	const item = route.params
	console.log(item)
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={styles.title}>{item.text}</Text>
				<View style={styles.info}>
					<View style={styles.status}>
						{item.completed ? (
							<MaterialIcons
								name="check-circle"
								size={24}
								color="black"
								style={[styles.statusIcon, styles.statusIconDone]}
							/>
						) : (
							<MaterialIcons
								name="remove-circle"
								size={24}
								color="black"
								style={[styles.statusIcon, styles.statusIconPending]}
							/>
						)}
						<Text style={styles.statusText}>
							{item.completed ? "Completed" : "Pending"}
						</Text>
					</View>
					<View style={styles.created}>
						<Fontisto
							name="date"
							size={24}
							color="black"
							style={styles.createdIcon}
						/>
						<Text style={styles.createdDate}>{item.created}</Text>
					</View>
				</View>
				<Text style={styles.about}>{item.about}</Text>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		fontWeight: 800,
		color: "#EDF2F4",
		textTransform: "uppercase",
	},
	info: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
	},
	status: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	statusIcon: {
		fontSize: 16,
	},
	statusIconDone: {
		color: "#90be6d",
	},
	statusIconPending: {
		color: "#f9c74f",
	},
	statusText: {
		marginLeft: 5,
		fontSize: 16,
		color: "#EDF2F4",
		fontWeight: 100,
	},
	created: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	createdIcon: {
		fontSize: 12,
		color: "#48cae4",
	},
	createdDate: {
		marginLeft: 5,
		color: "#8D99AE",
		fontSize: 12,
	},
	about: {
		textAlign: "justify",
		marginTop: 20,
		color: "#EDF2F4",
		fontSize: 16,
		fontWeight: 200,
	},
})
