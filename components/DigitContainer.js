import {View, Text, StyleSheet} from 'react-native';
import Colors from '../assets/colors';

const DigitContainer = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.inputfieldgrey,
    borderRadius: 5,
    height: 67,
    width: 37,
  },
  text: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: 'Raleway-SemiBold',
    marginTop: -5,
  },
});

export default DigitContainer;
