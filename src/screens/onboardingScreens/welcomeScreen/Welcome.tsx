import * as React from 'react';

import {StyleSheet, Text, View, Image,Button,Pressable,ActivityIndicator} from 'react-native';

import Logo from "../../../assets/img/podcast.svg";

function Welcome( {navigation} ) {
    return ( 
        <>
        <View style={styles.container} >
            <View style={styles.topView}>
                <View style={styles.podcastLogo}>
                    <Logo width={40} height={40} fill={'white'} />
                </View>
        
                <Text style={styles.WeTalk}>WeTalk</Text>
            </View>
            {/* <Image style={styles.podcastImg} source={require('../../../assets/img/podcast.png')} /> */}
            {/* <Pressable style={styles.button} onPress={() =>
                navigation.navigate('Intro', {name: 'Jane'})
            }>
                <Text style={styles.text}>Go to Intro</Text>
            </Pressable> */}
            <View style={[styles.horizontal, styles.button]}>
                <ActivityIndicator size="large" color="#00ff00" />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    WeTalk: {
       fontSize:36,
       fontWeight: 'bold',
       padding:6,
       letterSpacing:2
      },
    podcastLogo: {
        padding:6,
        borderRadius:5,
        backgroundColor: '#9B59B6',
      },
    button: {
        position: 'absolute',
        bottom: 42,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#9B59B2',
      },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
     
})

export default Welcome;