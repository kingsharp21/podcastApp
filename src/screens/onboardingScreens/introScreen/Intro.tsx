import * as React from 'react';

import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import listen1 from "../../../assets/img/listen2.jpeg";

function Intro(  ) {
    return ( 
        <View style={styles.container}>
            <ImageBackground source={listen1}  resizeMode="cover" style={styles.topBgImg}>
                {/* <Text style={styles.WeTalk}>WeTalk</Text> */}
            </ImageBackground>
            <Text style={styles.WeTalk}>Listen to the best podcasts every day with <Text>WeTalk</Text> now!</Text>
            <View style={styles.button}>
                <Text style={styles.btnText}>Next</Text>
                {/* <ActivityIndicator size="large" color="#9B59B6" /> */}
                
            </View>
        </View>
        
        
    
     );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
        width: '100%',

    },
    WeTalk: {
       fontSize:36,
       textAlign:'center',
       fontWeight: 'bold',
       padding:6,
       marginTop:5,
       letterSpacing:1,
    //    backgroundColor:'red',
      },  
    topBgImg: {
        height:500,
        width:'100%',

    },
    button: {
        position: 'absolute',
        bottom: 32,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#9B59B2',
        // boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)'
        borderWidth:.3,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 10,
        shadowOpacity: 1,
      },
      btnText : {
        color: '#fff',
        fontSize:16,
        fontWeight: 'bold',
      }
})

export default Intro;