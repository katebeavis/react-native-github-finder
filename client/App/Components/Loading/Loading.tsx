import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Colours } from '../../Styles/index';
import { Size } from '../../Types/Types';

interface ILoadingProps {
  loading: boolean;
  color?: string;
  size?: Size;
}

const Loading = ({
  loading,
  color = Colours.black,
  size = Size.large,
}: ILoadingProps) => {
  return <ActivityIndicator animating={loading} color={color} size={size} />;
};

export default Loading;
