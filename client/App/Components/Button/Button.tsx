import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles, { backgroundColors, icon } from './Button.styles';
import { ButtonType } from './Types';
import { Colours } from '../../Styles/index';

interface IButton {
  type: ButtonType;
  action: () => void;
}

const Button = ({ type, action }: IButton) => {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        {
          backgroundColor: backgroundColors[type],
        },
      ]}
      onPress={action}
      underlayColor={Colours.grey}
    >
      <FontAwesomeIcon
        icon={icon[type]}
        style={{
          color: Colours.white,
        }}
      />
    </TouchableHighlight>
  );
};

export default Button;
