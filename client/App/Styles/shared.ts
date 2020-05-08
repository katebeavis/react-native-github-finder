import { StyleSheet } from 'react-native';

import { Colours, Typography } from './index';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    padding: 10,
  },
  errorText: {
    ...Typography.medium,
    color: Colours.red,
    alignSelf: 'center',
  },
});

export default sharedStyles;
