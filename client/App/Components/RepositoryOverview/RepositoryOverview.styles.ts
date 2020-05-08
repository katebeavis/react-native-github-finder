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
  repoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  name: {
    color: Colours.blue,
    ...Typography.medium,
  },
  description: {
    ...Typography.extraSmall,
    color: Colours.black,
    paddingBottom: 5,
  },
});

export default styles;
