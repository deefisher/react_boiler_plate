import { Box, Grommet, Main } from 'grommet';
import { SideNavbar, Topbar } from '../components/__BRAND__/__BRAND__';
import theme from '../style/theme';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill direction="row">
                <SideNavbar />
                <Box fill>
                    <Topbar />
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
