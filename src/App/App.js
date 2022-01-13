import { Box, Grommet, Main } from 'grommet';
import { SideNavbar, Topbar } from '../components/__BRAND__/__BRAND__';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
                            <Routes>
                                <Route path="/" element={<Navigate replace to={routePaths.home} />}></Route>
                                <Route
                                    path={routePaths.home}
                                    element={
                                        <React.Fragment>
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
                                        </React.Fragment>
                                    }
                                ></Route>
                                <Route
                                    path={routePaths.users}
                                    element={
                                        <React.Fragment>
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
                                        </React.Fragment>
                                    }
                                ></Route>
                                <Route
                                    path={routePaths.projects}
                                    element={
                                        <React.Fragment>
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
                                        </React.Fragment>
                                    }
                                ></Route>
                                <Route
                                    path={routePaths.settings}
                                    element={
                                        <React.Fragment>
                                            <Box flex align="center" justify="center">
                                                Settings
                                            </Box>
                                            <Box
                                                height="1000px"
                                                width="medium"
                                                background="light-2"
                                                elevation="small"
                                                align="center"
                                                justify="center"
                                            ></Box>
                                        </React.Fragment>
                                    }
                                ></Route>
                            </Routes>
                        </Main>
                    </Box>
                </Router>
            </Box>
        </Grommet>
    );
}

export default App;
