import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackArrow = props => {
  return (
    <Svg
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 12h14m0 0l-7-7m7 7l-7 7"
        stroke="#1A1A1A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
