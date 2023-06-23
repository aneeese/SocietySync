import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import Colors from '../assets/colors';
import IconTextCard from '../components/IconTextCard';
import { TextInput } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather'

function SearchScreen({navigation}) {
    
    const [search, setSearch] = useState("")
    

    // const handleHighlight = (title) => {       
    //     for(let key in highlightStatus){
    //         title = title.replace(" ", "")
    //         if(title===key.toString()){
    //             if(title !== "Executives"){
    //                 return setHighlight(!highlightStatus[key])
    //             }
    //             setHighlight(!highlightStatus[0])
    //             setHighlight(!highlightStatus[key])
    //         }
    //     }
    // }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundgrey,
      }}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />

      <View style={styles.searchBarContainer}>
        <TextInput
            mode='outlined'
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInputField}
          right={<TextInput.Icon icon={() => <FeatherIcon
            name="search"
            color={Colors.inputicongrey}
            size={20}
            style={{paddingTop: 8}}
          />} />}
        
          selectionColor={Colors.black}
          textColor={Colors.blue}
          outlineStyle={{
            borderRadius: 30,
            borderColor: Colors.inputfieldgrey,
          }}
          contentStyle={{
            fontFamily: 'Raleway-Medium',
          }}
        />

        <Text style={{color: Colors.blue, fontFamily: "Raleway-Bold", fontSize: 30,
    marginTop: 10}}>
          Dashboard
        </Text>
      </View>

      <ScrollView
        style={{
          flex: 1
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <IconTextCard
            icon="account-group-outline"
            title="Executives"
            navigation={navigation}
          />

          <IconTextCard
            icon="calendar-blank"
            title="Events"
            navigation={navigation}
          />
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <IconTextCard
            icon="handshake-outline"
            title="Volunteers"
            moveTo="Volunteer Home"
            navigation={navigation}
          />

          <IconTextCard
            icon="view-dashboard-outline"
            title="Notice Board"
            moveTo="Notice Board"
            navigation={navigation}
          />
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <IconTextCard
            icon="clipboard-check-outline"
            title="Semester Schedule"
            navigation={navigation}
          />

          <IconTextCard
            icon="graph-outline"
            title="Teams"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingTop: 40
      },
      searchInputField: {
        backgroundColor: Colors.white,
        width: '90%',
        height: 45,
        paddingHorizontal: 10,
        fontSize: 15,
      },
})

export default SearchScreen;
