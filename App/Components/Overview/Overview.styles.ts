import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const button = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'center',
  flex: 1,
} as any;

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
  blueButton: {
    ...button,
    backgroundColor: Colours.blue,
  },
  pinkButton: {
    ...button,
    backgroundColor: Colours.pink,
  },
  purpleButton: {
    ...button,
    backgroundColor: Colours.purple,
  },
});

export default styles;
