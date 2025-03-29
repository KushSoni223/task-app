import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Share = props => {
  return (
    <Svg
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 6m4-4v13"
        stroke="#1A1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
