import React from 'react';
import { Image } from 'react-native';

export default function Icon({ iconUrl, width = 25, height = 25, ...rest }) {
  return (
    <Image
      source={{ uri: iconUrl }}
      resizeMode='contain'
      style={{ width: width, height: height }}
      {...rest}
    />
  );
}
