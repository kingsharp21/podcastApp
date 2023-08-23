import * as React from 'react';

import {StyleSheet, Text, View, Image,Button,Pressable,ActivityIndicator} from 'react-native';

import Logo from "../../../assets/img/podcast.svg";



function Welcome( {navigation} ) {
    const [fontsLoader,setFontsLoader] = React.useState(false)

    return ( 
        <>
        <View style={styles.container} >
            <View style={styles.topView}>
                <View style={styles.podcastLogo}>
                    <Logo width={30} height={30} fill={'white'} />
                </View>
        
                <Text style={styles.WeTalk}>WeTalk</Text>
            </View>
            {/* <Image style={styles.podcastImg} source={require('../../../assets/img/podcast.png')} /> */}
            {/* <Pressable style={styles.button} onPress={() =>
                navigation.navigate('Intro', {name: 'Jane'})
            }>
                <Text style={styles.text}>Go to Intro</Text>
            </Pressable> */}
            <View style={[styles.horizontal, styles.loader]}>
                {/* <ActivityIndicator size="large" color="#9B59B6" /> */}
                <View style={styles.bubbles}>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                    <View style={styles.bubble}><View style={styles.circle}></View></View>
                </View>
            </View>
        </View>
        
        </>
    
     );
}


function loader( ) {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        // rows.push(ObjectRow());
        return <View style={styles.bubble}><View style={styles.circle}></View></View>
    }
    // return rows;
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
       fontSize:35,
       fontWeight: 'bold',
       padding:10,
       letterSpacing:2,
       fontFamily: 'Poppins Medium',
      },
    podcastLogo: {
        padding:8,
        borderRadius:50,
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
    loader: {
        position: 'absolute',
        bottom: 42,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
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

    bubbles: {
        margin: 'auto',
        width: 25,
        height: 125,
        marginTop:75,
        position:'relative',
        display:'flex',
    },
    bubble: {
        flex:1,
        position: 'absolute',
        display: 'inline-block',
        margin: 'auto',
    },
    circle: {
        width: 25, 
        height: 25,
        borderRadius: 50,
        backgroundColor: '#9B59B6',
        animation: 'pulse 1.5s ease-in-out infinite',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
    },

     
})

export default Welcome;