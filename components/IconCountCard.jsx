import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/colors';

function IconCountCard({icon, count, title, moveTo, navigation}) {
  
    const navigationControl = () => {
    if (moveTo) {
      navigation.navigate(moveTo);
    }
  };

  return (
    <Pressable
      style={styles.parent}
      onPress={() => navigationControl()}
      >
      <View
        style={styles.icon}>
        <MaterialCommIcon
          name={icon}
          size={25}
          color={Colors.blue}
        />
      </View>

        <Text
            style={styles.count}
        >
            {count}
        </Text>

      <Text
        style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: 165,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    margin: 10,
    backgroundColor: "white",
    height: 190
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightpeach
  },
  count: {
    fontFamily: 'Raleway-Bold',
    fontSize: 35,
    color: Colors.peach,
  },
  title: {
    fontFamily: 'Raleway-Medium',
    fontSize: 15,
    color: Colors.blue,
  },
});

export default IconCountCard;
