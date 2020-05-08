import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  starsContainer: {
    color: Colors.blue,
    ...Typography.extraSmall,
    marginLeft: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colours.darkGrey,
    borderRadius: 2.5,
    flexDirection: 'row',
  },
  stars: {
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: Colours.darkGrey,
    backgroundColor: Colours.grey,
  },
  starsCount: { padding: 5 },
});

export default styles;
