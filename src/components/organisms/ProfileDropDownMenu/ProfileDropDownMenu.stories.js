import { Box } from 'grommet';
import React from 'react';
import ProfileDropDownMenu from './ProfileDropDownMenu';

export const DefaultProfileDropDownMenu = (props) => <ProfileDropDownMenu {...props} />;
export const OpenProfileDropDownMenu = () => <DefaultProfileDropDownMenu open />;
export const ProfileDropDownMenuInDark = () => (
    <Box background="topbar" width="300px" pad="medium">
        <DefaultProfileDropDownMenu open />
    </Box>
);

const ProfileDropDownMenuStory = {
    title: 'Organisms/ProfileDropDownMenu',
    component: ProfileDropDownMenu,
};

OpenProfileDropDownMenu.args = {
    with: 'props',
};
OpenProfileDropDownMenu.parameters = {
    // Sets the delay for a specific story.
    chromatic: { delay: 1000 },
};

export default ProfileDropDownMenuStory;
