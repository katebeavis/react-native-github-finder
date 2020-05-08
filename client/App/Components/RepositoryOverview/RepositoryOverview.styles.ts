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
  description: {
    ...Typography.extraSmall,
    color: Colours.black,
    paddingBottom: 5,
  },
});

export default styles;
