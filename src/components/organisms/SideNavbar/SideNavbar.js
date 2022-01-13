import { Box, Nav } from 'grommet';
import { Diamond, Help, Projects, UserManager } from 'grommet-icons';
import { Link } from 'react-router-dom';
import theme from '../../../style/theme';
import { routePaths } from '../../../utils/routing/routePaths';
import { SidebarNavLink } from '../../__BRAND__/__BRAND__';

//TODO create test using this guide: https://testing-library.com/docs/example-react-router/
//in order to test that all the nav links highlight correctly

const SideNavbar = () => {
    return (
        <Box
            a11yTitle="Side bar"
            background="main"
            width={{
                max: '100%',
            }}
            height={{
                min: '100%',
            }}
        >
            <Box width="100%" height={theme.dims.topBarHeight} align="center" pad="small" background="topbar">
                <Link to={routePaths.home}>
                    <Diamond a11yTitle="brand-logo" size={theme.dims.logoWidth} color="white" />
                </Link>
            </Box>
            <Box
                justify="between"
                flex
                pad={{
                    horizontal: 'small',
                    bottom: 'small',
                    top: 'large',
                }}
                border={{
                    color: 'border',
                    side: 'right',
                }}
            >
                <Nav gap="large">
                    <SidebarNavLink href={routePaths.projects}>
                        <Projects />
                    </SidebarNavLink>
                    <SidebarNavLink href={routePaths.users}>
                        <UserManager />
                    </SidebarNavLink>
                </Nav>
                <SidebarNavLink icon={<Help />} href="#" />
            </Box>
        </Box>
    );
};

export default SideNavbar;
