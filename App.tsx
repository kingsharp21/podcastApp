import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './src/screens/onboardingScreens/welcomeScreen/Welcome';
import Intro from './src/screens/onboardingScreens/introScreen/Intro'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
      {/* <Welcome/>
      <Intro/> */}
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
