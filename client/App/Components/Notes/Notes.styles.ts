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
  button: {
    height: 60,
    backgroundColor: Colours.blue,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: 60,
    padding: 10,
    ...Typography.medium,
    color: Colours.black,
    flex: 10,
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: Colours.grey,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
