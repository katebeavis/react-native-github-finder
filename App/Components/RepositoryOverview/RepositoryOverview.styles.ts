import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  name: {
    color: Colours.blue,
    ...Typography.medium,
    paddingBottom: 5,
  },
  stars: {
    color: Colors.blue,
    ...Typography.extraSmall,
    paddingBottom: 5,
  },
  description: {
    ...Typography.extraSmall,
    color: Colours.blue,
    paddingBottom: 5,
  },
});

export default styles;
