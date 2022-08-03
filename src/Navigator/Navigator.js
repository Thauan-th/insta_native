import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
import Feed from '../views/Feed';
import AddPhoto from '../views/AddPhoto';
 
const Tab = createBottomTabNavigator();
 
const Navigator = () => {

  const tabs = [
    {
      id:1,
      name:"Feed",
      screen:Feed,
      icon:"home"
    },
    {
      id:2,
      name:"AddPhoto",
      screen:AddPhoto,
      icon:"camera"
    },
  ]


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Feed'}
        tabBarOptions={{ showLabel: false }}>
        {
          tabs.map((tab,idx)=>(<Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.screen}
            options={{
              title: tab.name,
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name={tab.icon}
                  size={30}
                  color={focused ? '#28527a' : '#000'}
                />
              ),
            }}
          />))
        }      
      </Tab.Navigator>
    </NavigationContainer>
  );
};
 
export default Navigator;