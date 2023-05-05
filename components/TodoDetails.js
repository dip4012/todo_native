import { Pressable, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../shared/global"
import Card from "../shared/Card"
import { MaterialIcons } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"
import CustomButton from "../shared/CustomButton"
import { useState } from "react"
import AddEditModal from "../shared/AddEditModal"

export default function TodoDetails({ route, navigation }) {
	const [modalVisible, setModalVisible] = useState(false)
	const item = route.params

	return (
		<View style={globalStyles.container}>
			<Pressable
				style={({ pressed }) => [
					{ backgroundColor: pressed ? "#560bad" : "#7b2cbf" },
					styles.editButton,
				]}
				onPress={() => {
					setModalVisible(true)
				}}
			>
				<MaterialIcons name="edit" size={24} color="#EDF2F4" />
			</Pressable>
			<AddEditModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				onSubmitHandler={item.editTodo}
				initialValues={item}
				mode={"edit"}
			/>
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
				<View style={styles.buttonGroup}>
					{!item.completed && (
						<CustomButton
							backgroundColor={"#90be6d"}
							onPressHandler={() => {
								item.completeTodo(item.id)
								navigation.goBack()
							}}
						>
							<MaterialIcons name="done" size={24} color="#EDF2F4" />
						</CustomButton>
					)}
					<View style={{ flex: 1 }} />
					<CustomButton
						backgroundColor={"#c81d25"}
						onPressHandler={() => {
							item.deleteTodo(item.id)
							navigation.goBack()
						}}
					>
						<MaterialIcons name="delete" size={24} color="#EDF2F4" />
					</CustomButton>
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	editButton: {
		position: "absolute",
		left: 10,
		top: 135,
		width: 49.5,
		padding: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		zIndex: 100,
	},
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
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginTop: 20,
	},
})
