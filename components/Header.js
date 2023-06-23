import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/colors';

const Header = ({title, canGoBack}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="chevron-back-outline" size={30} color={Colors.white} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.peach,
    height: 65,
    paddingBottom: 6,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: 'Raleway-Bold',
  },
});

export default Header;
