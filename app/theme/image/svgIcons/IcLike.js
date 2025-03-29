import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Like = props => {
  return (
    <Svg
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.458 4.591a5.255 5.255 0 00-1.708-1.177 5.122 5.122 0 00-4.028 0 5.255 5.255 0 00-1.708 1.177L12 5.638 10.986 4.59a5.182 5.182 0 00-3.722-1.59 5.183 5.183 0 00-3.722 1.59A5.52 5.52 0 002 8.431a5.52 5.52 0 001.542 3.841L12 21l8.458-8.728a5.446 5.446 0 001.141-1.761 5.581 5.581 0 000-4.158 5.445 5.445 0 00-1.141-1.762z"
        stroke="#1A1A1A"
        strokeWidth={props?.strokeWidth ?? 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
