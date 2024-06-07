import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesContainer from './containers/MoviesContainer';
import TVShowsContainer from './containers/TVShowsContainer';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MoviesContainer} />
        <Tab.Screen name="TV Shows" component={TVShowsContainer} />
        <Tab.Screen name="Search Results" component={MoviesContainer} />
      </Tab.Navigator>
  );
};

export default TopTabs;
