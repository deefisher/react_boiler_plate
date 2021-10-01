import { Box, Button, Nav } from 'grommet';
import { Diamond, Help, Projects, UserManager } from 'grommet-icons';
import theme from '../../../style/theme';
import { routePaths } from '../../../utils/routing/routePaths';
import { SidebarNavLink } from '../../__BRAND__/__BRAND__';

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
                <Button>
                    <Diamond a11yTitle="brand-logo" size={theme.dims.logoWidth} color="white" />
                </Button>
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
                <SidebarNavLink icon={<Help />} />
            </Box>
        </Box>
    );
};

export default SideNavbar;
