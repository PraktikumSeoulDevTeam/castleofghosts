import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {store} from '~/store';

import {RegistrationPage} from './RegistrationPage';

test('render page', async () => {
    const txt = 'Registration';
    render(
        <Provider store={store}>
            <Router>
                <RegistrationPage />
            </Router>
        </Provider>
    );

    expect(screen.getByText(txt)).toBeInTheDocument();
});
