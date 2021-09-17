import { Box } from 'grommet';
import React from 'react';
import ProfileDropDownMenu from './ProfileDropDownMenu';

export const DefaultProfileDropDownMenu = (props) => <ProfileDropDownMenu {...props} />;
export const OpenProfileDropDownMenu = () => <DefaultProfileDropDownMenu open />;
export const ProfileDropDownMenuInDark = () => (
    <Box background="header" width="300px" pad="medium">
        <DefaultProfileDropDownMenu open />
    </Box>
);

const ProfileDropDownMenuStory = {
    title: 'Organisms/ProfileDropDownMenu',
    component: ProfileDropDownMenu,
};

export default ProfileDropDownMenuStory;
