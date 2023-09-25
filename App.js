import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { Provider } from "./context/BlogContext";
import * as Screens from "./screens/index";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTitle: "Blog",
						headerTitleAlign: "center",
					}}
				>
					<Stack.Screen
						name="Home"
						component={Screens.HomeScreen}
						options={({ navigation }) => ({
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate("Create")}>
									<AntDesign
										name="plus"
										size={24}
										color="black"
									/>
								</TouchableOpacity>
							),
						})}
					/>
					<Stack.Screen
						name="Create"
						component={Screens.CreateScreen}
					/>
					<Stack.Screen
						name="Show"
						component={Screens.ShowScreen}
						options={({ navigation, route }) => ({
							headerRight: () => (
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("Edit", { id: route.params.id })
									}
								>
									<EvilIcons
										name="pencil"
										size={35}
										color="black"
									/>
								</TouchableOpacity>
							),
						})}
					/>
					<Stack.Screen
						name="Edit"
						component={Screens.EditScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
