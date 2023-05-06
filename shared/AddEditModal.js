import {
	Keyboard,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native"
import { globalStyles } from "./global"
import { Formik } from "formik"
import * as yup from "yup"
import CustomButton from "./CustomButton"
import { MaterialIcons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, editTodo } from "../redux/todoSlice"

export default function AddEditModal({
	modalVisible,
	setModalVisible,
	itemId,
}) {
	const dispatch = useDispatch()
	const todo = itemId
		? useSelector((state) => state.todos.filter((todo) => todo.id === itemId))[0]
		: { text: "", about: "" }

	return (
		<Modal
			animationType={"slide"}
			visible={modalVisible}
			transparent={false}
			onRequestClose={() => setModalVisible(false)}
		>
			<View style={globalStyles.container}>
				<Pressable
					onPress={() => setModalVisible(false)}
					style={{ alignItems: "flex-end" }}
				>
					<MaterialIcons name="close" style={styles.closeButton} />
				</Pressable>

				<Formik
					initialValues={todo}
					onSubmit={(values, actions) => {
						itemId ? dispatch(editTodo(values)) : dispatch(addTodo(values))
						actions.resetForm()
						setModalVisible(false)
					}}
					validationSchema={yup.object({
						text: yup.string().required().min(3),
						about: yup.string().required().min(10),
					})}
				>
					{(props) => (
						<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
							<View style={globalStyles.container}>
								<View style={styles.formFieldContainer}>
									<Text style={styles.formFieldLabel}>Your Todo Title</Text>
									<TextInput
										style={styles.formFieldInput}
										placeholder="eg.: Make Coffee"
										placeholderTextColor={"#8D99AE"}
										value={props.values.text}
										onChangeText={props.handleChange("text")}
										onBlur={props.handleBlur("text")}
									/>
									<Text style={styles.formFieldError}>
										{props.touched.text && props.errors.text}
									</Text>
								</View>
								<View style={styles.formFieldContainer}>
									<Text style={styles.formFieldLabel}>Describe Your Todo</Text>
									<TextInput
										style={styles.formFieldInput}
										placeholder="eg.: Black Coffee with no sugar"
										placeholderTextColor={"#8D99AE"}
										value={props.values.about}
										onChangeText={props.handleChange("about")}
										onBlur={props.handleBlur("about")}
									/>
									<Text style={styles.formFieldError}>
										{props.touched.about && props.errors.about}
									</Text>
								</View>
								<View style={styles.buttonContainer}>
									<CustomButton
										backgroundColor={"#EF233C"}
										onPressHandler={props.handleSubmit}
									>
										<MaterialIcons name="add-task" style={styles.buttonIcon} />
										<Text style={styles.buttonText}>{itemId ? "Done" : "Add"}</Text>
									</CustomButton>
								</View>
							</View>
						</TouchableWithoutFeedback>
					)}
				</Formik>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	formFieldContainer: {
		gap: 10,
		marginBottom: 20,
	},
	closeButton: {
		fontSize: 24,
		color: "#EF233C",
	},
	formFieldLabel: {
		color: "#EDF2F4",
		fontSize: 20,
		fontWeight: 100,
	},
	formFieldInput: {
		borderWidth: 0.4,
		borderBottomWidth: 4,
		borderColor: "#EDF2F4",
		borderRadius: 10,
		padding: 20,
		color: "#8D99AE",
	},
	formFieldError: {
		color: "#EF233C",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonIcon: {
		fontSize: 24,
		color: "#EDF2F4",
	},
	buttonText: {
		fontSize: 16,
		color: "#EDF2F4",
		fontWeight: 300,
	},
})
