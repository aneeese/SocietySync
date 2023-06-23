import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList, TextInput } from 'react-native';
import Colors from '../assets/colors';
import ApplicationCard from '../components/ApplicationCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ApplicationsScreen({navigation}) {

  const [search, setSearch] = useState('');
  const [details, setDetails] = useState([]);

  const getData = async () => {
    try {
      const applicationData = await AsyncStorage.getItem('applications');

      if (applicationData !== null) {
        setDetails(JSON.parse(applicationData));
        console.log("->", applicationData)
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (id) => {
    setDetails(volunteer => volunteer.filter(item => item.id !== id));
    await AsyncStorage.setItem("applications", JSON.stringify(details))
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInputField}
        />
      </View>

      <Text style={styles.pendingText}>Pending applications: {details.length} </Text>
      <FlatList
        data={details}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <ApplicationCard
              details={item.item}
              deleteItem={deleteItem}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.backgroundgrey,
  },
  searchBarContainer: {
    backgroundColor: Colors.peach,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
  },
  searchInputField: {
    backgroundColor: Colors.transparentwhite,
    width: '90%',
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 30,
    fontFamily: 'Raleway-Regular',
    fontSize: 17,
  },
  pendingText: {
    color: Colors.inputicongrey,
    fontFamily: "Raleway-Medium",
    flexGrow: 1,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 15,
    fontSize: 12
}
});

export default ApplicationsScreen;
