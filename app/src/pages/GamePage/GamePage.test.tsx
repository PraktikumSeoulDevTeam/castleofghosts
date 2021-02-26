import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {store} from '~/store';

import {GamePage} from './GamePage';

test('render page', async () => {
    const wrapperClassName = '.game-page';
    const {container} = render(
        <Provider store={store}>
            <Router>
                <GamePage />
            </Router>
        </Provider>
    );
    expect(container.querySelector(wrapperClassName)).not.toEqual(null);
});
