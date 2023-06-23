import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Colors from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';

function EventHighlightsCard() {

  return (
    <TouchableOpacity 
        style={styles.parent}
    >
        <Image
                resizeMode="cover"
                source={require('../assets/imgs/highlight.jpg')}
                style={styles.image}
        />
        <LinearGradient
        colors={[
            'rgba(100, 100, 100, 0.1)',
            'rgba(100, 100, 100, 0.1)',
        ]}
        style={styles.linearGradient}>
            
        </LinearGradient>

        <View style={styles.textView}>
            <Text style={styles.largeText}>Stella Orientation</Text>
            <Text style={styles.smallText}>Information Session</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    width: 200,
    height: 260,
    borderRadius: 30,
    elevation: 10,
    marginLeft: 15,
    marginBottom: 30,
    marginTop: 10
  },
  linearGradient: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 210,
    paddingVertical: 20,
    elevation: 2
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 30,
    position: 'absolute',
  },
  textView: {
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingVertical: 10,
    height: 50,

    
  },
  smallText: {
    fontFamily: 'Raleway-Medium',
    color: Colors.inputicongrey,
    fontSize: 11,
    marginTop: -5
  },
  largeText: {
    fontFamily: 'Raleway-Bold',
    color: Colors.blue,
    fontSize: 18,
    marginTop: -5
  },
  
});

export default EventHighlightsCard;
