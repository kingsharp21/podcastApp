import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './src/screens/onboardingScreens/welcomeScreen/Welcome';
import Intro from './src/screens/onboardingScreens/introScreen/Intro'

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome/>
      {/* <Intro/> */}
    </View>
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
