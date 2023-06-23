import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Pressable,
  FlatList,
} from 'react-native';
import Colors from '../assets/colors';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IconCountCard from '../components/IconCountCard';
import EventCard from '../components/EventCard';
import SmallApplicationCard from '../components/SmallApplicationCard';
import EventHighlightsCard from '../components/EventHighlightsCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import app from '../Firebase';
import {getAuth, signOut} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
  const auth = getAuth(app);
  const currentDate = new Date();
  const counts = {volunteer: 26, applications: 10, executives: 6, events: 5};
  // const noticeboard = [
  //     {
  //       id: Math.random(),
  //       title: 'React Native',
  //       type: 'Workshop',
  //       venue: 'CL-6',
  //       time: '11:30-1PM',
  //       date: '27 May',
  //       desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
  //       image: 'profile.jpg',
  //     },
  //     {
  //       id: Math.random(),
  //       title: 'React Native',
  //       type: 'Workshop',
  //       venue: 'CL-6',
  //       time: '11:30-1PM',
  //       date: '27 May',
  //       desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
  //       image: 'profile.jpg',
  //     },
  //     {
  //       id: Math.random(),
  //       title: 'React Native',
  //       type: 'Workshop',
  //       venue: 'CL-6',
  //       time: '11:30-1PM',
  //       date: '27 May',
  //       desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
  //       image: 'profile.jpg',
  //     }
  // ];
  // const applications = [
  //     {
  //       id: Math.random(),
  //       name: 'Muhammad Anes',
  //       regNo: 'FA20-BCS-045',
  //       position: 'Event Management',
  //       email: 'anees3@gmail.com',
  //       phone: '0332 5346821',
  //       image: 'profile.jpg',
  //       descr: "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!"
  //     },
  //     {
  //       id: Math.random(),
  //       name: 'Muhammad Anesjdces',
  //       regNo: 'FA20-BCS-045',
  //       position: 'Event Management',
  //       email: 'anees3@gmail.com',
  //       phone: '0332 5346821',
  //       image: 'profile.jpg',
  //       descr: "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!"
  //     },
  //     {
  //       id: Math.random(),
  //       name: 'Muhammad Anees',
  //       regNo: 'FA20-BCS-045',
  //       position: 'Event Management',
  //       email: 'anees3@gmail.com',
  //       phone: '0332 5346821',
  //       image: 'profile.jpg',
  //       descr: "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!"
  //     }
  // ]

  const [events, setEvents] = useState([]);
  const [applications, setApplications] = useState([]);

  const getData = async () => {
    try {
      const eventData = await AsyncStorage.getItem('events');
      const applicationData = await AsyncStorage.getItem('applications');

      if (eventData !== null) {
        setEvents(JSON.parse(eventData));
      }

      if (applicationData !== null) {
        jsonData = JSON.parse(applicationData);
        filteredData = jsonData.filter(item => item);
        setApplications(filteredData);
        //console.log('data', filteredData);
      }

      console.log('something is off');
    } catch (e) {
      console.log(e);
    }
  };

  const deleteApplication = async id => {
    await AsyncStorage.removeItem('applications');
    setApplications(application => application.filter(item => item.id !== id));
    console.log(applications);

    await AsyncStorage.setItem('applications', JSON.stringify(applications));
    //getData();
  };

  const customDateGenerator = currentDate => {
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    switch (month + 1) {
      case 1:
        return (date + ' January ' + year).toString();
      case 2:
        return (date + ' February ' + year).toString();
      case 3:
        return (date + ' March ' + year).toString();
      case 4:
        return (date + ' April ' + year).toString();
      case 5:
        return (date + ' May ' + year).toString();
      case 6:
        return (date + ' June ' + year).toString();
      case 7:
        return (date + ' July ' + year).toString();
      case 8:
        return (date + ' August ' + year).toString();
      case 9:
        return (date + ' September ' + year).toString();
      case 10:
        return (date + ' October ' + year).toString();
      case 11:
        return (date + ' November ' + year).toString();
      case 12:
        return (date + ' December ' + year).toString();
    }
  };

  const moveTo = destination => {
    navigation.navigate(destination);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundgrey,
      }}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <AntDesignIcon
          name="setting"
          size={28}
          color={Colors.black}
          style={{
            paddingVertical: 15,
            paddingRight: 6,
          }}
        />
        <TouchableOpacity onPress={handleSignOut}>
          <AntDesignIcon
            name="logout"
            size={25}
            color={Colors.black}
            style={{
              paddingVertical: 15,
              paddingLeft: 6,
              paddingRight: 15,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Raleway-Bold',
            color: Colors.peach,
          }}>
          Morning,
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Raleway-Medium',
            color: Colors.darkgrey,
          }}>
          Muhammad Anees
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Raleway-Medium',
            color: Colors.black,
            textAlign: 'right',
          }}>
          {customDateGenerator(currentDate)}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <IconCountCard
            icon="account-group-outline"
            title="Executives"
            count={counts.executives}
            navigation={navigation}
          />

          <IconCountCard
            icon="file-document-outline"
            title="Applications"
            count={counts.applications}
            navigation={navigation}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <IconCountCard
            icon="handshake-outline"
            title="Volunteers"
            count={counts.volunteer}
            navigation={navigation}
          />

          <IconCountCard
            icon="calendar-blank"
            title="Upcoming Events"
            count={counts.events}
            navigation={navigation}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          borderTopWidth: 1,
          borderTopColor: Colors.horizontalBar,
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
            color: Colors.blue,
            marginTop: 10,
          }}>
          Notice board
        </Text>
        <Pressable
          onPress={() => moveTo('Notice Board')}
          style={{paddingTop: 10, paddingLeft: 40, paddingRight: 15}}>
          <AntDesignIcon
            name="right"
            size={20}
            color={Colors.grey}
            style={{
              textAlign: 'right',
            }}
          />
        </Pressable>
      </View>
      <View>
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={item => (
            <EventCard details={item.item} navigation={navigation} />
          )}
          horizontal={true}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          borderTopWidth: 1,
          borderTopColor: Colors.horizontalBar,
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
            color: Colors.blue,
            marginTop: 10,
          }}>
          Pending Applications
        </Text>
        <Pressable
          onPress={() => moveTo('Applications')}
          style={{paddingTop: 10, paddingLeft: 40, paddingRight: 15}}>
          <AntDesignIcon
            name="right"
            size={20}
            color={Colors.grey}
            style={{
              textAlign: 'right',
            }}
          />
        </Pressable>
      </View>

      <View style={{marginTop: 10}}>
        {applications.map(item => {
          return (
            <SmallApplicationCard
              key={item.id}
              details={item}
              deleteItem={() => deleteApplication(item.id)}
              navigation={navigation}
            />
          );
        })}
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          borderTopWidth: 1,
          borderTopColor: Colors.horizontalBar,
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
            color: Colors.blue,
            marginTop: 10,
          }}>
          Event Highlights
        </Text>
        <Pressable style={{paddingTop: 10, paddingLeft: 40, paddingRight: 15}}>
          <AntDesignIcon
            name="right"
            size={20}
            color={Colors.grey}
            style={{
              textAlign: 'right',
            }}
          />
        </Pressable>
      </View>
      <View>
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={() => <EventHighlightsCard />}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
