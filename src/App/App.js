import { Box, Grommet, Main } from 'grommet';
import { SideNavbar, Topbar } from '../components/__BRAND__/__BRAND__';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from '../style/theme';
import { routePaths } from '../utils/routing/routePaths';

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill direction="row">
                <Router>
                    <SideNavbar />
                    <Box fill>
                        <Topbar />
                        <Main direction="row" flex overflow={{ horizontal: 'hidden' }} background="main">
                            <Switch>
                                <Redirect from="/" to={routePaths.home} exact />
                                <Route path={routePaths.home}>
                                    <Box flex align="center" justify="center">
                                        Home
                                    </Box>
                                    <Box
                                        height="1000px"
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    ></Box>
                                </Route>
                                <Route path={routePaths.users}>
                                    <Box flex align="center" justify="center">
                                        Users
                                    </Box>
                                    <Box
                                        height="1000px"
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    ></Box>
                                </Route>
                                <Route path={routePaths.projects}>
                                    <Box flex align="center" justify="center">
                                        Projects
                                    </Box>
                                    <Box
                                        height="1000px"
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    ></Box>
                                </Route>
                            </Switch>
                        </Main>
                    </Box>
                </Router>
            </Box>
        </Grommet>
    );
}

export default App;
