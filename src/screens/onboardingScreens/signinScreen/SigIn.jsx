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


function SigIn() {
    return ( 
       <View style={styles.container}>
          <View style={styles.topView}>
              
          </View>
          <View style={styles.buttomView}>
              <Text style={styles.headerText}>Let's you in</Text>
              <View style={styles.loginOptions}>
                <View style={styles.Option}>
                  <Image></Image>
                  <Text>fjsfsbfksb s</Text>
                </View>
                <View style={styles.Option}>
                  <Image></Image>
                  <Text>fjvnfjvfvjkdfmvndjfkvm</Text>
                </View>
                <View style={styles.Option}>
                  <Image></Image>
                  <Text>jvvjkbvjkfvbs jkvbsf vjk</Text>
                </View>
              </View>
          </View>
          <Text>or</Text>
          <Buttom text={'Sign in with password'}/>
          <Text>Don't have an account? <Text>Sign up</Text> </Text>

       </View>
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
    width: '100%',
    backgroundColor: '#f9f9f9',

  },
  topView : {
    height: 310,
    width: "100%",
    backgroundColor: 'red',
  },
  headerText : {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
    marginTop: 10,
    marginBottom: 8,
    letterSpacing: 1,
    // fontFamily: "semiBold"
  },
  loginOptions : {
    height:'500',
    backgroundColor: 'green',
    // height: "auto",
  },
  Option : {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    width: 350,
    borderRadius:20,
    height: 70,
    borderWidth: 1,
    borderColor: "thistle",
    // backgroundColor:"blue",
    margin: 5,
  },
  buttomView : {

  },
  loginOptions : {

  },
   
})


export default SigIn;