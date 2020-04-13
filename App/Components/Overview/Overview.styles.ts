import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    ...Typography.large,
    color: Colours.white,
    alignSelf: 'center',
  },
});

export default styles;
