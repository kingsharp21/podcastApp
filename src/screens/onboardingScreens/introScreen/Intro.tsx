import * as React from "react";
import * as Font from "expo-font";

import CustomText from '../../../components/CustomText/CustomText';
import Buttom from "../../../components/buttom/Buttom";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

import listen1 from "../../../assets/img/test11.jpg";

// const CustomText = (props) => {
//   const [fontLoaded, setFontLoaded] = React.useState(false);
//   React.useEffect(() => {
//     async function loadFont() {
//       await Font.loadAsync({
//         "custom-font": require("../../../../assets/fonts/Poppins-Bold.ttf"),
//         semiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
//         medium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
//       });

//       setFontLoaded(true);
//     }

//     loadFont();
//   }, []);

//   if (!fontLoaded) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <Text style={{ ...props.style, fontFamily: "semiBold" }}>
//       {props.children}
//     </Text>
//   );
// };

function Intro({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={listen1}
        resizeMode="cover"
        style={styles.topBgImg}
      ></ImageBackground>

      <CustomText style={styles.WeTalk}>
        Listen to the best podcasts every day with{" "}
        <Text style={styles.highlight}>WeTalk</Text> now!
      </CustomText>
      
      <Buttom text={'Next'} nav={'Welcome'} nav_name={'Welcome'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  WeTalk: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    padding: 7,
    marginTop: 10,
    marginBottom: 20,
    letterSpacing: 1,
    fontFamily: "semiBold",
    // backgroundColor:'red',
  },
  topBgImg: {
    height: 500,
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: 42,
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

export default Intro;
