import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/colors';

const TransparentHeader = ({headerTransparent}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Icon 
            name="chevron-back-outline"
            size={30} 
            color={Colors.white}
        />
    </TouchableOpacity>
      
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
    paddingVertical: 10
  },
});

export default TransparentHeader;
