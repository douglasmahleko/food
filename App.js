import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Navigator from './src/views/navigation/stack'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/views/navigation/bottomNavigator';
import DetailScreen from './src/views/screens/detailScreen';
import OnBoardScreen from './src/views/screens/onBoardScreen';
import { COLORS } from './src/consts/colors';


const Stack = createStackNavigator()
export default function App() {
  
  return (
    // <Navigator />
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BorderScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator}  />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
