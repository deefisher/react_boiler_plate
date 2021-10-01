import { Box, Header } from 'grommet';
import theme from '../../../style/theme';
import { ProfileDropDownMenu } from '../../__BRAND__/__BRAND__';

const Topbar = () => {
    return (
        <Header
            a11yTitle="Top nav bar"
            background="topbar"
            height={theme.dims.topBarHeight}
            pad={{
                horizontal: 'medium',
            }}
        >
            <Box flex></Box>
            <ProfileDropDownMenu />
        </Header>
    );
};

export default Topbar;
