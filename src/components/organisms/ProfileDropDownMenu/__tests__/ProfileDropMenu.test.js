import { act, fireEvent, render, screen } from '@testing-library/react';
import ProfileDropDownMenu, { ariaLabels, labelText } from '../ProfileDropDownMenu';

describe('ProfileDropMenu', () => {
    let wrapper;
    window.scrollTo = jest.fn();
    beforeEach(() => {
        wrapper = render(<ProfileDropDownMenu />);
    });

    it('should render ProfileDropMenu correctly', () => {
        const { asFragment } = wrapper;
        expect(asFragment()).toMatchSnapshot();
    });

    it('should open drop menu on click', () => {
        expect(screen.queryByText(labelText.SETTINGS)).not.toBeTruthy();

        act(() => {
            fireEvent.click(screen.getByLabelText(ariaLabels.profileDropdown));
        });

        expect(screen.queryByText(labelText.SETTINGS)).toBeTruthy();
    });
});

//TODO add click on settings as taiko test