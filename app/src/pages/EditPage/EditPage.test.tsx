import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {store} from '~/store';

import {EditPage} from './EditPage';

test('render page', async () => {
    const txt = 'User info';
    render(
        <Provider store={store}>
            <Router>
                <EditPage />
            </Router>
        </Provider>
    );
    expect(screen.getAllByText(txt)).toHaveLength(2);
});

test('render page password', async () => {
    const tabItemPassword = 'Password';
    const txt = 'Confirm password:';
    render(
        <Provider store={store}>
            <Router>
                <EditPage />
            </Router>
        </Provider>
    );
    fireEvent.click(screen.getByText(tabItemPassword));
    expect(screen.getAllByText(txt)).toHaveLength(1);
});
