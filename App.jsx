import React, {useEffect} from 'react';
import Colors from './assets/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/Header';
import VolunteerScreen from './screens/VolunteersScreen';
import VolunteerEditScreen from './screens/VolunteerEditScreen';
import ApplicationsScreen from './screens/ApplicationsScreen';
import SearchScreen from './screens/SearchScreen';
import NoticeBoardScreen from './screens/NoticeBoardScreen';
import EventScreen from './screens/EventScreen';
import TransparentHeader from './components/TransparentHeader';
import EventEditScreen from './screens/EventEdit';
import HomeScreen from './screens/HomeScreen';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CodeVerification from './screens/CodeVerfication';
import ForgotPassword from './screens/ForgotPassword';
import EmailVerification from './screens/EmailVerification';
import ResetPassword from './screens/ResetPassword';
import EditProfile from './screens/EditProfile';
import PasswordReset from './screens/PasswordReset';
import Profile from './screens/ProfileScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function App() {
  const noticeboard = [
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React ive',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'Rt Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
  ];
  const volunteerDetails = [
    {
      id: Math.random(),
      name: 'Muhammad Anes',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad s',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
  ];
  const applications = [
    {
      id: Math.random(),
      name: 'Muhammad Anes',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anesjdces',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Asdcnees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Aneasies',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
      descr:
        'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad Anees',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      name: 'Muhammad s',
      regNo: 'FA20-BCS-045',
      position: 'Event Management',
      email: 'anees3@gmail.com',
      phone: '0332 5346821',
      image: 'profile.jpg',
    },
  ];

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    storeData('events', noticeboard);
    storeData('applications', applications);
    storeData('volunteers', volunteerDetails);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        backBehavior="history"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name="Landing Page"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Verification"
          component={CodeVerification}
          options={{
            headerShown: true,
            header: props => <Header {...props} title="Code Verification" />,
          }}
        />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            header: props => <Header {...props} title="Forgot Password" />,
          }}
        />
        <RootStack.Screen
          name="EmailVerification"
          component={EmailVerification}
          options={{
            headerShown: true,
            header: props => <Header {...props} title="Forgot Password" />,
          }}
        />
        <RootStack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: true,
            header: props => <Header {...props} title="Forgot Password" />,
          }}
        />

        <RootStack.Screen name="BottomNav" component={BottomNav} />
        <RootStack.Screen
          name="Volunteer Edit"
          component={VolunteerEditScreen}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} canGoBack={true} title="Edit Volunteer" />
            ),
          }}
        />
        <RootStack.Screen
          name="Event View"
          component={EventScreen}
          options={{
            headerShown: true,
            header: props => <TransparentHeader />,
          }}
        />
        <RootStack.Screen
          name="Event Edit"
          component={EventEditScreen}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} canGoBack={true} title="Edit Event" />
            ),
          }}
        />
        <RootStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} title="Edit Profile" canGoBack={true} />
            ),
          }}
        />
        <RootStack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} title="Reset Password" canGoBack={true} />
            ),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function BottomNav() {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeTab') {
            return <Ionicons name="home-outline" size={size} color={color} />;
          } else if (route.name === 'SearchTab') {
            return <Ionicons name="search-outline" size={size} color={color} />;
          } else if (route.name === 'ApplicationsTab') {
            return <AntDesignIcon name="profile" size={size} color={color} />;
          } else if (route.name === 'ProfileTab') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: Colors.peach,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 4,
        },
        tabBarIndicatorStyle: {
          marginTop: 20,
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackScreen}
        options={{
          title: 'Search',
        }}
      />
      <Tab.Screen
        name="ApplicationsTab"
        component={ApplicationStackScreen}
        options={{
          headerShown: true,
          title: 'Applications',
          header: props => <Header {...props} title="Applications" />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          headerShown: true,
          title: 'Profile',
          header: props => <Header {...props} title="Profile" />,
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      backBehavior="history"
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Volunteer Home"
        component={VolunteerScreen}
        options={{
          headerShown: true,
          header: props => (
            <Header {...props} canGoBack={true} title="Volunteers" />
          ),
        }}
      />
      <HomeStack.Screen
        name="Notice Board"
        component={NoticeBoardScreen}
        options={{
          headerShown: true,
          header: props => (
            <Header {...props} canGoBack={true} title="Notice Board" />
          ),
        }}
      />
      <ApplicationStack.Screen
        name="Applications"
        component={ApplicationsScreen}
        options={{
          headerShown: true,
          header: props => (
            <Header {...props} canGoBack={true} title="Applications" />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      backBehavior="history"
      screenOptions={{headerShown: false}}
      initialRouteName="Search">
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="Notice Board"
        component={NoticeBoardScreen}
        options={{
          headerShown: true,
          header: props => (
            <Header {...props} canGoBack={true} title="Notice Board" />
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}

const ApplicationStack = createNativeStackNavigator();

function ApplicationStackScreen() {
  return (
    <ApplicationStack.Navigator
      backBehavior="history"
      screenOptions={{headerShown: false}}
      initialRouteName="Applications">
      <ApplicationStack.Screen
        name="Applications"
        component={ApplicationsScreen}
      />
    </ApplicationStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      backBehavior="history"
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
