import PropTypes from 'prop-types';
import { Box, Button, DropButton, Text } from 'grommet';
import { FormDown, Logout, SettingsOption, User } from 'grommet-icons';
import React from 'react';

export const labelText = {
    SETTINGS: 'Settings',
    LOGOUT: 'Log out',
};

export const ariaLabels = {
    dropdownMenu: 'Dropdown menu',
    dropMenu: 'Drop menu',
    profileDropdown: 'Profile drop down',
};

const profileDropMenuItems = [
    { label: labelText.SETTINGS, icon: <SettingsOption size="15px" />, onItemClick: () => {} },
    { label: labelText.LOGOUT, icon: <Logout size="15px" />, onItemClick: () => {} },
];

const DropMenu = ({ items, ...props }) => {
    return (
        <Box background="white" a11yTitle={ariaLabels.dropdownMenu}>
            {items.map((item, i) => (
                <Button
                    key={`drop-menu-${i}`}
                    a11yTitle={ariaLabels.dropMenu}
                    hoverIndicator={{ background: 'light-3' }}
                    onClick={items.onItemClick}
                >
                    <Box pad={{ vertical: '1rem', horizontal: 'medium' }} width={{ min: '9rem' }}>
                        <Box direction={'row'} align="center">
                            {item.icon}
                            <Box margin={{ left: 'small' }}>
                                <Text size="small">{item.label}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Button>
            ))}
        </Box>
    );
};

const ProfileDropDownMenu = (props) => {
    return (
        <DropButton
            {...props}
            a11yTitle={ariaLabels.profileDropdown}
            label={
                <Box direction="row" align="center">
                    <Box
                        justify="center"
                        align="center"
                        round="50%"
                        background="brand"
                        width="35px"
                        height="35px"
                        margin={{
                            right: 'small',
                        }}
                    >
                        <User size="19px" color="white" />
                    </Box>
                    <FormDown />
                </Box>
            }
            dropAlign={{
                top: 'bottom',
                right: 'right',
            }}
            dropContent={<DropMenu items={profileDropMenuItems} />}
            dropProps={{
                elevation: 'custom',
            }}
            plain
        />
    );
};

export default ProfileDropDownMenu;

DropMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.element,
            onItemClick: PropTypes.func,
        }),
    ).isRequired,
};
