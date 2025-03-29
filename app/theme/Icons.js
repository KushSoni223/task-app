/* eslint-disable react/react-in-jsx-scope */
import Bitcoin from './image/svgIcons/Bitcoin.svg';
import {BackArrow} from './image/svgIcons/IcBackArrow';
import {Calender} from './image/svgIcons/IcCalender';
import {Like} from './image/svgIcons/IcLike';
import {Pause} from './image/svgIcons/IcPause';
import {PlayDark} from './image/svgIcons/IcPlay';
import {Profile} from './image/svgIcons/IcProfile';
import {ReloadIcon} from './image/svgIcons/IcReloadIcon';
import {Search} from './image/svgIcons/IcSearch';
import {Share} from './image/svgIcons/IcShare';

export {Bitcoin};
export const IcPlayDark = props => <PlayDark {...props} />;
export const IcPause = props => <Pause {...props} />;
export const IcReloadIcon = props => <ReloadIcon {...props} />;
export const IcSearch = props => <Search {...props} />;
export const IcCalender = props => <Calender {...props} />;
export const IcLike = props => <Like {...props} />;
export const IcProfile = props => <Profile {...props} />;
export const IcShare = props => <Share {...props} />;
export const IcBackArrow = props => <BackArrow {...props} />;
