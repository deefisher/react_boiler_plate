import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import theme from '../../../style/theme';
import { Link, useLocation } from 'react-router-dom';

const StyledSidebarNavLink = styled(Box)`
    ${(props) =>
        props.isActive &&
        `
        & svg { stroke: ${theme.global.colors.brand};}
        transform: translateY(-1px);
        `}
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
    console.log('href', href)
    const location = useLocation();

    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        location.pathname === href ? setIsActive(true) : setIsActive(false);
    }, [location, href]);

    return (
        <Link to={href}>
            <StyledSidebarNavLink width="100%" aria-selected={isActive} align="center" isActive={isActive} {...props}>
                {children}
            </StyledSidebarNavLink>
        </Link>
    );
};

export default SidebarNavLink;
