import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerActiveTintColor: '#522d85',
          drawerInactiveTintColor: '#979393',
          drawerStyle: {
            backgroundColor: '#f0e9ff',
            width: 240
          },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Menú', 
            drawerIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} /> 
          }} 
        />
        <Drawer.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            title: 'Detalles', 
            drawerIcon: ({ color }) => <Icon name="information-circle-outline" size={20} color={color} /> 
          }} 
        />

      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;
