import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id == route.params.id);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={styles.label}>Başlık</Text>
				<Text style={styles.content}>{blogPost.title}</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.label}>İçerik</Text>
				<Text style={styles.content}>{blogPost.content}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: "center",

		marginTop: 10,
	},

	container: {
		width: "90%",
		borderWidth: 1,
		borderRadius: 30,

		alignItems: "center",

		marginBottom: 10,
	},

	label: {
		fontSize: 30,
	},

	content: {
		fontSize: 18,
	},
});
