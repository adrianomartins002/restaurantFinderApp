import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import SearchRestaurant from '../pages/SearchRestaurant';
import Restaurant from '../pages/Restaurant';

const Search = createStackNavigator();

const SearchRoutes: React.FC = ()=>(
  <Search.Navigator screenOptions={{
    headerShown:false
  }}>
    <Search.Screen name="Home" component={Home} />
    <Search.Screen name="SearchRestaurant" component={SearchRestaurant} />
    <Search.Screen name="Restaurant" component={Restaurant} />
  </Search.Navigator>
);

export default SearchRoutes;
