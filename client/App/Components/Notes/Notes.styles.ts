import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    ...Typography.medium,
    color: Colours.white,
  },
  smallButtonText: {
    ...Typography.small,
    color: Colours.white,
    letterSpacing: 0.1,
  },
  button: {
    height: 60,
    backgroundColor: Colours.purple,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 4,
    ...Typography.medium,
  },
  smallButton: {
    height: 25,
    backgroundColor: Colours.red,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2.5,
  },
  searchInput: {
    height: 60,
    padding: 10,
    ...Typography.medium,
    color: Colours.black,
    flex: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    backgroundColor: Colours.grey,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
