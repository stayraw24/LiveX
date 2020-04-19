import * as React from 'react';
import { View, Text } from 'react-native';
import Tabs from './src/Tabs';
import Splash from './src/Splash';
import PhoneAuth from './src/PhoneAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>  
      <Stack.Navigator
      screenOptions={{
    headerShown: false
  }}>	

  		<Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="PhoneAuth" component={PhoneAuth}/>
        <Stack.Screen name="Tabs" component={Tabs} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;