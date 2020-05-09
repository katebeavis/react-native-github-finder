import { StyleSheet } from 'react-native';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Colours } from '../../Styles';
import { ButtonStylingMapping, ButtonIconMapping } from './Types';

export const backgroundColors: ButtonStylingMapping = {
  delete: Colours.red,
  edit: Colours.paleBlue,
};

export const icon: ButtonIconMapping = {
  delete: faTrashAlt,
  edit: faEdit,
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
