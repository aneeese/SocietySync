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

function IconTextCard({icon, title, moveTo, navigation}) {
    const highlightStatus = {
        "Executives": true,
        "Events": false,
        "Volunteers": false,
        "Notice Board": false,
        "Semester Schedule": false,
        "Teams": false
    }
    const [active, setActive] = useState(highlightStatus)
  
  
    const navigationControl = () => {
    if (moveTo) {
      navigation.navigate(moveTo);
    }
  };

  const handleHighlight = () => {
    const newActive = {...active}
    if(title !== "Executives"){
        newActive["Executives"] = false
        newActive[title] = !active[title]
    }
    else{
        newActive[title] = !active[title]
    }   
    setActive(newActive)   
  }

  const resetHighlight = () => {
    setActive(highlightStatus)
}

useEffect(()=>{console.log(active)},[active])

  return (
    <Pressable
      style={[
        styles.parent,
        {
          backgroundColor: active[title] ? Colors.peach : Colors.white,
        },
      ]}
      onPressIn={() => handleHighlight()}
      onPressOut={() => resetHighlight()}
      onPress={() => navigationControl()}
      >
      <View
        style={[
          styles.icon,
          {
            backgroundColor: active[title] ? Colors.white : Colors.lightpeach,
          },
        ]}>
        <MaterialCommIcon
          name={icon}
          size={30}
          color={active[title] ? Colors.peach : '#3D3A4D'}
        />
      </View>

      <Text
        style={[
          styles.title,
          {
            color: active[title] ? Colors.white : Colors.blue,
          },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '40%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 55,
    elevation: 15,
    margin: 20,
    marginBottom: 10
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    color: Colors.white,
    marginTop: 10,
  },
});

export default IconTextCard;
