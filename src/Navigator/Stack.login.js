import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

import Profile from '../views/Profile/Profile';
import Login from '../views/Login/Login';
import Register from '../views/Register/register';

export default ()=> {
  const Stack =  createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}