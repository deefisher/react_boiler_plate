import { Box, DropButton, Text } from 'grommet';
import { FormDown, Logout, SettingsOption, User } from 'grommet-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routePaths } from '../../../utils/routing/routePaths';

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
    {
        label: labelText.SETTINGS,
        icon: <SettingsOption size="15px" />,
        href: routePaths.settings,
        onItemClick: () => {},
    },
    { label: labelText.LOGOUT, icon: <Logout size="15px" />, onItemClick: () => {} },
];

const StyledNoDecorationLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const StyledNoBoxShodowBox = styled(Box)`
    box-shadow: none;
`;

const DropMenu = ({ items, ...props }) => {
    return (
        <Box background="white" a11yTitle={ariaLabels.dropdownMenu}>
            {items.map((item, i) => (
                <StyledNoDecorationLink to={item.href ? item.href : '#'} key={`drop-item-${i}`}>
                    <StyledNoBoxShodowBox
                        a11yTitle={ariaLabels.dropMenu}
                        hoverIndicator={{ background: 'light-3' }}
                        onClick={item.onItemClick}
                    >
                        <Box pad={{ vertical: '1rem', horizontal: 'medium' }} width={{ min: '9rem' }}>
                            <Box direction={'row'} align="center">
                                {item.icon}
                                <Box margin={{ left: 'small' }}>
                                    <Text size="small">{item.label}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </StyledNoBoxShodowBox>
                </StyledNoDecorationLink>
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
