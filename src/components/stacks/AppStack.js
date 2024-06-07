import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndexScreen from '../screens/IndexScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import TVShowDetailsScreen from '../screens/TVShowDetailsScreen';

import { SafeAreaView } from '@gluestack-ui/themed';
import SearchScreen from '../screens/SearchScreen';
import Header from '../layout/Header';
import TVShowScreen from '../screens/TVShowScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MoviesStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Index"
            component={IndexScreen}

        />
        <Stack.Screen
            name="Show"
            component={MovieDetailsScreen}
            options={({ route }) => ({
                title: route.params.movie.title,
                headerStyle: {
                    backgroundColor: "#2c3e50",
                },
                headerTitleStyle: {
                    color: "#fff",
                },
            })}
        />
    </Stack.Navigator>
);

const TVShowsStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="TV Show"
            component={TVShowScreen}

        />

        <Stack.Screen
            name="TVShowDetails"
            component={TVShowDetailsScreen}
            options={({ route }) => ({
                title: route.params.tvShow.name,
                headerStyle: {
                backgroundColor: "#2c3e50",
                },
                headerTitleStyle: {
                color: "#fff",
                },
            })}
            />
    </Stack.Navigator>
);

const SearchShowsStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="search"
            component={SearchScreen}
        />
        <Stack.Screen
            name="movieDetails"
            component={MovieDetailsScreen}
            options={({ route }) => ({
                headerShown: false,
                tabBarVisible: false,
                initialParams: { navigation }, 
            })}
        />
    </Stack.Navigator>
);


const AppStack = () => (
    <NavigationContainer>
        <Header />
        <SafeAreaView style={{ flex: 1 }}>
            
            <Tab.Navigator 
                >
                <Tab.Screen name="Movies" component={MoviesStack} />
                <Tab.Screen name="Search Results" component={SearchShowsStack} />
                <Tab.Screen name="TV Shows" component={TVShowsStack} />
            </Tab.Navigator>
        </SafeAreaView>
    </NavigationContainer>
);

export default AppStack;
