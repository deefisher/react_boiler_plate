import { Box, DropButton, Grommet, Header, Heading } from 'grommet';
import { FormDown, User } from 'grommet-icons';
import theme from '../style/theme';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <Header a11yTitle="header-nav-bar" background="header" height="4rem" pad={{ horizontal: 'medium' }}>
                    <Heading level="3" margin="none">
                        My App
                    </Heading>
                    <DropButton
                        label={
                            <Box direction="row" align="center">
                                <Box
                                    justify="center"
                                    align="center"
                                    round="50%"
                                    background="brand"
                                    width="38px"
                                    height="38px"
                                    margin={{ right: 'small' }}
                                >
                                    <User size="20px" />
                                </Box>
                                <FormDown />
                            </Box>
                        }
                        dropAlign={{ top: 'bottom', right: 'right' }}
                        dropContent={<Box pad="large" background="white" />}
                        dropProps={{ elevation: 'custom' }}
                        plain
                    />
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
                        sidebar
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
}

export default App;
