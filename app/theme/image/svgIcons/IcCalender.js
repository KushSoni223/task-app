import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Calender = props => {
  return (
    <Svg
      width={props?.width ?? 28}
      height={props?.height ?? 28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.167 4.667H5.833c-.644 0-1.166.522-1.166 1.166v16.334c0 .644.522 1.166 1.166 1.166h16.334c.644 0 1.166-.522 1.166-1.166V5.833c0-.644-.522-1.166-1.166-1.166z"
        stroke="#000"
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.667 18.667h.002v.002h-.002v-.002zM14 18.667h.002v.002H14v-.002zM9.333 18.667h.003v.002h-.003v-.002zM18.667 14h.002v.002h-.002V14zM14 14h.002v.002H14V14zM9.333 14h.003v.002h-.003V14zM4.667 9.333h18.666M18.667 2.333v2.334M9.333 2.333v2.334"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
