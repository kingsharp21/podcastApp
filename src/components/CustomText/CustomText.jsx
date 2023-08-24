import * as React from "react";
import * as Font from "expo-font";

import {StyleSheet, Text, View, Image,Button,Pressable,ActivityIndicator} from 'react-native';


const CustomText = (props) => {
    const [fontLoaded, setFontLoaded] = React.useState(false);
    React.useEffect(() => {
        async function loadFont() {
          await Font.loadAsync({
            'custom-font': require('../../../assets/fonts/Poppins-Bold.ttf'),
          });
    
          setFontLoaded(true);
        }
    
        loadFont();
      }, []);
  
    if (!fontLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <Text style={{ ...props.style, fontFamily: 'custom-font' }}>
        {props.children}
      </Text>
    );
};

export default CustomText;