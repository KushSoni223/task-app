import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Profile = props => {
  return (
    <Svg
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="#1A1A1A"
        strokeWidth={props?.strokeWidth ?? 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
