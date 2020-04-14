import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    ...Typography.mediumLarge,
    color: Colours.white,
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: Colours.blue,
    ...Typography.medium,
  },
  rowContent: {
    ...Typography.mediumLarge,
  },
});

export default styles;
