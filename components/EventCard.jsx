import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Colors from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';

function EventCard({details, navigation}) {
  
  const moveToViewScreen = (info) => {
    console.log("->",info)
    navigation.navigate("Event View", info)
  }

  return (
    <TouchableOpacity 
        style={styles.parent} 
        onPress={() => moveToViewScreen(details)}
    >
      <Image
        resizeMode="contain"
        source={require('../assets/imgs/event.png')}
        style={styles.image}
      />

      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.75)',
          'rgba(100, 100, 100, 0.3)',
          'rgba(0, 0, 0, 0.75)',
        ]}
        style={styles.linearGradient}>
        <View style={styles.upperTextView}>
          <Text style={styles.smallText}>{details.type}</Text>
          <Text style={styles.largeText}>{details.title}</Text>
        </View>

        <View style={styles.lowerTextView}>
          <View style={styles.lowerInnerView}>
            <Text style={styles.largeText}>{details.venue}</Text>
            <Text style={styles.smallText}>{details.time}</Text>
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.dateBoxText}>{details.date}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: 200,
    height: 260,
    borderRadius: 30,
    elevation: 10,
    marginLeft: 15,
    marginBottom: 30,
    marginTop: 10
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 30,
    position: 'absolute',
  },
  linearGradient: {
    borderRadius: 30,
    height: 260,
    paddingVertical: 20,
  },
  upperTextView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  lowerTextView: {
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  lowerInnerView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  smallText: {
    fontFamily: 'Raleway-Medium',
    color: Colors.inputicongrey,
    fontSize: 12,
  },
  largeText: {
    fontFamily: 'Raleway-Bold',
    color: Colors.white,
    fontSize: 18,
  },
  dateBox: {
    backgroundColor: Colors.peach,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingBottom: 5,
    elevation: 30,
  },
  dateBoxText: {
    fontFamily: 'Raleway-Bold',
    color: Colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EventCard;
