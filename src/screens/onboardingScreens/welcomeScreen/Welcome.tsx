import * as React from 'react';
import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';
import { useIsFocused } from "@react-navigation/native";

import CustomText from '../../../components/CustomText/CustomText';

import {StyleSheet, Text, View, Image,Button,Pressable,ActivityIndicator} from 'react-native';

import Logo from '../../../assets/img/podcast.svg';





function Welcome( {navigation, visible} ) {
    setTimeout(()=>{
      navigation.navigate('Intro', {name: 'Intro'})
    },3000)


    return ( 
        <>
        <View style={styles.container} >
            <View style={styles.topView}>
                <View style={styles.podcastLogo}>
                    <Logo width={30} height={30} fill={'white'} />
                </View>
                <CustomText style={styles.WeTalk}>WeTalk</CustomText>
            </View>
     
            <View style={[styles.horizontal, styles.loader]}>
                {/* <LottieView  style={{
                  width: 180,
                  height: 180,
              }} source={require('../../../../assets/loading.json')}  autoPlay
              loop/> */}
            </View>
        </View>
        
        </>
    
     );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#f9f9f9',

    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    WeTalk: {
       fontSize:35,
       padding:10,
       paddingTop:20,
       letterSpacing:1,
       fontFamily: "semiBold"
      },
    podcastLogo: {
        padding:8,
        borderRadius:50,
        backgroundColor: '#9B59B6',
      },
    
    loader: {
        position: 'absolute',
        bottom: 42,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },

    horizontal: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
     
})

export default Welcome;