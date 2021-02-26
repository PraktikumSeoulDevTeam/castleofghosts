import '@testing-library/jest-dom';
import {render, cleanup, screen, getByPlaceholderText, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {store} from '~/store';

import {UserPasswordChange} from './UserPasswordChange';

jest.mock('~/api', () => ({
    updateUserPassword: jest.fn(() => Promise.resolve(true))
}));

let cnt: HTMLElement;
let applyButton: HTMLElement;
let currentPasswordInput: HTMLElement;
let newPasswordInput: HTMLElement;
let confirmPasswordInput: HTMLElement;

beforeEach(() => {
    const rnd = render(
        <Provider store={store}>
            <Router>
                <UserPasswordChange />
            </Router>
        </Provider>
    );
    cnt = rnd.container;
    applyButton = screen.getByText('Change');
    currentPasswordInput = getByPlaceholderText(cnt, 'Current password');
    newPasswordInput = getByPlaceholderText(cnt, 'New password');
    confirmPasswordInput = getByPlaceholderText(cnt, 'Confirm password');
});

afterEach(() => cleanup());

test('must render component', async () => {
    const txt = 'Current password:';
    expect(screen.getByText(txt)).toBeInTheDocument();
});

test('must check inputs lengths', async () => {
    const minLengthTxt = 'min length 5 symbols';

    userEvent.type(currentPasswordInput, '1234');
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.getAllByText(minLengthTxt)).toHaveLength(1);

    userEvent.type(newPasswordInput, '1234');
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.getAllByText(minLengthTxt)).toHaveLength(2);

    userEvent.type(confirmPasswordInput, '1234');
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.getAllByText(minLengthTxt)).toHaveLength(3);

    userEvent.type(currentPasswordInput, '12345');
    userEvent.type(newPasswordInput, '12345');
    userEvent.type(confirmPasswordInput, '12345');
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.queryAllByText(minLengthTxt)).toHaveLength(0);
});

test('must check required fields', async () => {
    const requiredTxt = 'field is required';
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.getAllByText(requiredTxt)).toHaveLength(3);

    userEvent.type(currentPasswordInput, '12345');
    userEvent.type(newPasswordInput, '12345');
    userEvent.type(confirmPasswordInput, '12345');
    await waitFor(() => userEvent.click(applyButton));
    expect(screen.queryAllByText(requiredTxt)).toHaveLength(0);
});
