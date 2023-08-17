import * as React from 'react';

import {StyleSheet, Text, View, Image,} from 'react-native';

import Logo from "../../../assets/img/podcast.svg";

function Welcome(  ) {
    return ( 
        <View style={styles.container}>
            {/* <Image style={styles.podcastImg} source={require('../../../assets/img/podcast.png')} /> */}
            <View style={styles.podcastLogo}>
                <Logo width={40} height={40} fill={'white'} />
            </View>
      
            <Text style={styles.WeTalk}>WeTalk</Text>
           
        </View>
    
     );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#f9f9f9',

    },
    WeTalk: {
       fontSize:36,
       fontWeight: 'bold',
       padding:6,
       letterSpacing:2
    //    backgroundColor:'red'
      },
    podcastLogo: {
        padding:6,
        borderRadius:5,
        backgroundColor: '#9B59B6',

      }
     
})

export default Welcome;