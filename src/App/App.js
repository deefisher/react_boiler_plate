import { Box, Button, Grommet, Header, Main, Nav } from 'grommet';
import { Diamond, Help, Projects, UserManager } from 'grommet-icons';
import { ProfileDropDownMenu, SidebarNavButton } from '../components/__BRAND__/__BRAND__';
import theme from '../style/theme';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill direction="row">
                <Box a11yTitle="Side bar" background="main" width={{ max: '100%' }} height={{ min: '100%' }}>
                    <Box width="100%" height={theme.dims.topBarHeight} align="center" pad="small" background="topbar">
                        <Button>
                            <Diamond a11yTitle="brand-logo" size={theme.dims.logoWidth} color="white" />
                        </Button>
                    </Box>
                    <Box
                        justify="between"
                        flex
                        pad={{ horizontal: 'small', bottom: 'small', top: 'large' }}
                        border={{
                            color: 'border',
                            side: 'right',
                        }}
                    >
                        <Nav gap="large">
                            <SidebarNavButton icon={<Projects />} />
                            <SidebarNavButton icon={<UserManager />} />
                        </Nav>
                        <SidebarNavButton icon={<Help />} />
                    </Box>
                </Box>
                <Box fill>
                    <Header
                        a11yTitle="Top nav bar"
                        background="topbar"
                        height={theme.dims.topBarHeight}
                        pad={{ horizontal: 'medium' }}
                    >
                        <Box flex></Box>
                        <ProfileDropDownMenu />
                    </Header>
                    <Main direction="row" flex overflow={{ horizontal: 'hidden' }} background="main">
                        <Box flex align="center" justify="center">
                            app body
                        </Box>
                        <Box
                            height="1000px"
                            width="medium"
                            background="light-2"
                            elevation="small"
                            align="center"
                            justify="center"
                        ></Box>
                    </Main>
                </Box>
            </Box>
        </Grommet>
    );
}

export default App;
