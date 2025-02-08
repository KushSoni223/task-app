/* eslint-disable react/react-in-jsx-scope */
import Bitcoin from './image/svgIcons/Bitcoin.svg';
import {Pause} from './image/svgIcons/IcPause';
import {PlayDark} from './image/svgIcons/IcPlay';
import {ReloadIcon} from './image/svgIcons/IcReloadIcon';

export {Bitcoin};
export const IcPlayDark = props => <PlayDark {...props} />;
export const IcPause = props => <Pause {...props} />;
export const IcReloadIcon = props => <ReloadIcon {...props} />;
