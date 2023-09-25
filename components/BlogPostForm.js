import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function BlogPostForm({
	onSubmit,
	initialValues,
	isThisPageCreate,
}) {
	const [title, setTitle] = useState(initialValues ? initialValues.title : "");

	const [content, setContent] = useState(
		initialValues ? initialValues.content : ""
	);

	return (
		<View style={styles.main}>
			<Text style={styles.label}>Enter Title:</Text>

			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(e) => setTitle(e)}
				autoCapitalize="none"
			/>

			<Text style={styles.label}>Enter Content:</Text>

			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(e) => setContent(e)}
				autoCapitalize="none"
			/>

			<TouchableOpacity
				style={styles.buttonMain}
				onPress={() => onSubmit(title, content)}
			>
				<View style={styles.buttonView}>
					<Text style={styles.buttonText}>
						{isThisPageCreate ? "Save" : "Update"}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		marginTop: 10,
	},

	label: {
		fontSize: 20,

		marginLeft: 10,
	},

	input: {
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 20,

		marginTop: 10,
		marginBottom: 15,
		padding: 5,
	},

	buttonMain: {
		padding: 30,
	},

	buttonView: {
		borderRadius: 20,
		backgroundColor: "green",

		justifyContent: "center",
		alignItems: "center",

		padding: 10,
	},

	buttonText: {
		color: "white",
		fontSize: 20,
	},
});
