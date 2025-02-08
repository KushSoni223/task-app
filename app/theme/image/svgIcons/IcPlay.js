import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const PlayDark = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      {...props}>
      <Path
        fill={props?.fill ?? 'black'}
        d="M20.492 7.969L10.954.975A5 5 0 003 5.005V19a4.994 4.994 0 007.954 4.03l9.538-6.994a5 5 0 000-8.062z"
      />
    </Svg>
  );
};
