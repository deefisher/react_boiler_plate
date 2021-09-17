import { Box, Grommet, Header, Heading } from 'grommet';
import ProfileDropDownMenu from '../components/organisms/ProfileDropDownMenu/ProfileDropDownMenu';
import theme from '../style/theme';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <Header a11yTitle="Header nav bar" background="header" height="4rem" pad={{ horizontal: 'medium' }}>
                    <Heading level="3" margin="none">
                        My App
                    </Heading>
                    <ProfileDropDownMenu />
                </Header>
                <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
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
                    >
</Box>
                </Box>
            </Box>
        </Grommet>
    );
}

export default App;
