import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Two")}>
        <Text>go to two</Text>
    </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Three")}>
        <Text>go to three</Text>
    </TouchableOpacity>
);

const ScreenThree = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>Go to search</Text>
    </TouchableOpacity>
  );
  

const NativeStack = createNativeStackNavigator();

const Stack = () => (
    <NativeStack.Navigator
    screenOptions={{
      presentation: "modal",
      animation:"flip",
      headerTintColor: "orange",
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen
            name="One"
            component={ScreenOne}
            options={{
                title: "Awesome app",
            }}
        />
        <NativeStack.Screen name="Two" component={ScreenTwo} />
        <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
);

export default Stack;
