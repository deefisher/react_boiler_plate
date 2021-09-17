import { Grommet } from 'grommet';
import theme from '../src/style/theme';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <Grommet
            theme={{
                ...theme,
                global: {
                    ...theme.global,
                },
            }}
            width="100%"
            height="100%"
        >
            <Story />
        </Grommet>
    ),
];
