import * as React from 'react';

import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import listen1 from "../../../assets/img/listen2.jpeg";

function Intro(  ) {
    return ( 
        <View style={styles.container}>
            <ImageBackground source={listen1}  resizeMode="cover" style={styles.topBgImg}>
                {/* <Text style={styles.WeTalk}>WeTalk</Text> */}
            </ImageBackground>
            <Text style={styles.WeTalk}>WeTalk</Text>
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
       fontWeight: 'bold',
       padding:6,
       letterSpacing:2,
    //    backgroundColor:'red',
      },  
    topBgImg: {
        height:500,
        width:'100%',

    }
})

export default Intro;