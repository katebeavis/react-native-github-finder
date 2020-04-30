import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.blue,
    paddingBottom: 10,
  },
  name: {
    alignSelf: 'center',
    ...Typography.mediumLarge,
    marginTop: 10,
    marginBottom: 5,
    color: Colours.white,
  },
  handle: {
    alignSelf: 'center',
    ...Typography.small,
    color: Colours.white,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default styles;
