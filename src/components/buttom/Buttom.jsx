import * as React from "react";
import * as Font from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";



function Buttom({nav,nav_name,text}) {
    return (
    <TouchableHighlight
        onPress={() => navigation.navigate(`${nav}`, { name: `${nav_name}` })} style={styles.button} underlayColor='blue'>
        <View>
          <Text style={styles.btnText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
}





const styles = StyleSheet.create({
    button: {
      // position: "absolute",
      // bottom: 42,
      width: "75%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 18,
      paddingHorizontal: 12,
      borderRadius: 30,
      elevation: 3,
      backgroundColor: "#9B59B2",
      borderWidth: 0.3,
      overflow: "hidden",
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowRadius: 10,
      shadowOpacity: 1,
    },
    btnText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    highlight: {
      color: "#9B59B6",
    },
  });
  

export default Buttom;