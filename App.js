import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './DashboardScreen';
import CreateGroupScreen from './CreateGroupScreen';
import LoginScreen from './LoginScreen';
import { GroupProvider } from './GroupContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GroupProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GroupProvider>
  );
};

export default App;
