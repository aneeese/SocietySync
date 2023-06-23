import {View, Text, StyleSheet} from 'react-native';
import Colors from '../assets/colors';

export default function UserInfo({field, data}) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.fieldContainer}>
        <Text style={styles.contactInfo}>{field}</Text>
      </View>

      <View style={styles.phoneContainer}>
        <Text style={styles.contactInfo}>{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    borderTopColor: Colors.horizontalBar,
    borderBottomColor: Colors.horizontalBar,
    paddingVertical: 5,
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  phoneContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contactInfo: {
    color: Colors.black,
    fontFamily: 'Raleway-Medium',
    fontSize: 13,
    marginLeft: -13,
  },
});
