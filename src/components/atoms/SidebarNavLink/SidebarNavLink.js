import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import theme from '../../../style/theme';
import { Link } from 'react-router-dom';

const StyledSidebarNavLink = styled(Box)`
    transition: transform 150ms ease-out 0s, color 150ms ease-out 0s;
    &: hover svg {
        stroke: ${theme.global.colors.brand};
    }
    &: hover {
        cursor: pointer;
        transform: translateY(-1px);
    }
`;

const SidebarNavLink = ({ children, href, ...props }) => {
    return (
        <Link to={href}>
            <StyledSidebarNavLink width="100%" align="center" {...props}>
                {children}
            </StyledSidebarNavLink>
        </Link>
    );
};

export default SidebarNavLink;
