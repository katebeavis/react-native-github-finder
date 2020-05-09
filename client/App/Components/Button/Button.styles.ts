import { StyleSheet } from 'react-native';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Colours } from '../../Styles';
import { ButtonStylingMapping, ButtonIconMapping } from './Types';

export const backgroundColors: ButtonStylingMapping = {
  DELETE: Colours.red,
  UPDATE: Colours.paleBlue,
  CREATE: Colours.purple,
};

export const icon: ButtonIconMapping = {
  DELETE: faTrashAlt,
  UPDATE: faEdit,
  CREATE: faEdit,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2.5,
    padding: 5,
  },
});

export default styles;
