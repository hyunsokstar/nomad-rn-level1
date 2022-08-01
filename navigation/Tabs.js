import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import React from 'react'
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();


function Tabs() {

    return (
        <Tab.Navigator
            initialRouteName="Search">
            <Tab.Screen
                name="Movies"
                component={Movies}
                
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={"film-outline"} color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="TV"
                component={Tv}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="tv-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={"search-outline"} color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

