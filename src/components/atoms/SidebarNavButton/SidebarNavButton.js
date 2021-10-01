import { Button } from 'grommet';
import styled from 'styled-components';
import theme from '../../../style/theme';

const SidebarNavButton = styled(Button)`
    transition: transform 150ms ease-out 0s, color 150ms ease-out 0s;
    align-self: center;
    &: hover svg {
        stroke: ${theme.global.colors.brand};
    }
    &: hover {
        cursor: pointer;
        transform: translateY(-1px);
    }
`;

export default SidebarNavButton;
