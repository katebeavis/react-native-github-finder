import { StyleSheet } from 'react-native';

import { Colours, Typography } from '../../Styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colours.blue,
  },
  title: {
    marginBottom: 20,
    ...Typography.large,
    textAlign: 'center',
    color: Colours.white,
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: Colours.white,
    borderRadius: 8,
    color: Colours.white,
  },
  buttonText: {
    ...Typography.medium,
    color: Colours.grey,
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: Colours.white,
    borderColor: Colours.white,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  errorText: {
    ...Typography.medium,
    color: Colours.red,
    alignSelf: 'center',
  },
});

export default styles;
