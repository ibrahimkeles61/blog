import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
} from "react-native";
import { useContext, useEffect } from "react";
import { Context } from "../context/BlogContext";

import { Feather } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
	const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

	useEffect(() => {
		getBlogPosts();

		const listener = navigation.addListener("focus", () => getBlogPosts());

		() => listener.ramove();
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Show", { id: item.id })}
					>
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<Feather
									name="trash"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		borderTopWidth: 1,
		borderColor: "gray",

		flexDirection: "row",
		justifyContent: "space-between",

		paddingHorizontal: 10,
		paddingVertical: 20,
	},

	title: {
		fontSize: 18,
	},
});
