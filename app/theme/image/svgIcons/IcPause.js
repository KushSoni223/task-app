import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Pause = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      {...props}>
      <Path d="M6.5 0A3.5 3.5 0 003 3.5v17a3.5 3.5 0 007 0v-17A3.5 3.5 0 006.5 0zM17.5 0A3.5 3.5 0 0014 3.5v17a3.5 3.5 0 007 0v-17A3.5 3.5 0 0017.5 0z" />
    </Svg>
  );
};
