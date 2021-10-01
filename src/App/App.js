import { Box, Button, Grommet, Header, Main, Nav } from 'grommet';
import { Diamond, Help, Projects, UserManager } from 'grommet-icons';
import ProfileDropDownMenu from '../components/organisms/ProfileDropDownMenu/ProfileDropDownMenu';
import theme from '../style/theme';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill direction="row">
                <Box a11yTitle="Side bar" background="brand" width={{ max: '100%' }} height={{ min: '100%' }}>
                    <Box
                        width="100%"
                        height={theme.dims.topBarHeight}
                        align="center"
                        margin={{ bottom: 'large' }}
                        pad="small"
                        background="topbar"
                    >
                        <Diamond a11yTitle="brand-logo" size={theme.dims.logoWidth} color="brand" />
                    </Box>
                    <Box justify="between" flex pad="small">
                        <Nav gap="small">
                            <Button icon={<Projects />} hoverIndicator />
                            <Button icon={<UserManager />} hoverIndicator />
                        </Nav>
                        <Button icon={<Help />} hoverIndicator />
                    </Box>
                </Box>
                <Box fill>
                    <Header
                        a11yTitle="Header nav bar"
                        background="topbar"
                        height={theme.dims.topBarHeight}
                        pad={{ horizontal: 'medium' }}
                    >
                        <Box flex></Box>
                        <ProfileDropDownMenu />
                    </Header>
                    <Main direction="row" flex overflow={{ horizontal: 'hidden' }}>
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
