import * as React from "react";
import * as Font from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




import Welcome from './src/screens/onboardingScreens/welcomeScreen/Welcome';
import Intro from './src/screens/onboardingScreens/introScreen/Intro'
import SigIn from "./src/screens/onboardingScreens/signinScreen/SigIn";

const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("./assets/fonts/Poppins-Bold.ttf"),
        semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
        medium: require("./assets/fonts/Poppins-Medium.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  // if (!fontLoaded) {
  //   return <Text>Loading...</Text>;
  // }

  // return (
  //   <Text style={{ ...props.style, fontFamily: "semiBold" }}>
  //     {props.children}
  //   </Text>
  // );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Welcome"
          // component={Welcome}
          // component={SigIn}
          component={Intro}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SigIn" component={SigIn} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
