import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {ErrorPage} from './ErrorPage';

test('render page 404', async () => {
    const txt = 'Ничего не найдено';
    render(
        <Router>
            <ErrorPage type="404" />
        </Router>
    );
    expect(screen.getByText(txt)).toBeInTheDocument();
});

test('render page 409', async () => {
    const txt = 'У вас нет доступа';
    render(
        <Router>
            <ErrorPage type="409" />
        </Router>
    );
    expect(screen.getByText(txt)).toBeInTheDocument();
});

test('render page 500', async () => {
    const txt = 'Уппс, у нас произошла ошибка';
    render(
        <Router>
            <ErrorPage type="500" />
        </Router>
    );
    expect(screen.getByText(txt)).toBeInTheDocument();
});
