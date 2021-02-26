import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {getLeaderboard} from '~/api';
import {store} from '~/store';

import {LeaderboardPage} from './LeaderboardPage';

import {ApiGetLeaderboardResponse} from '~/api/types';

const answer = [
    {
        data: {
            id: 1613737919485,
            name: 'praktikum.cog',
            cogTime: 152
        }
    },
    {
        data: {
            id: 1613737663040,
            name: 'ArtUser',
            cogTime: 117
        }
    },
    {
        data: {
            id: 1614232946413,
            name: 'klochook',
            cogTime: 65
        }
    }
];

jest.mock('~/api', () => ({
    getLeaderboard: jest.fn(() => Promise.resolve(answer))
}));
const mockedApi = getLeaderboard as jest.MockedFunction<() => Promise<ApiGetLeaderboardResponse>>;
const title = 'Best warriors';
const emptyTxt = 'Be the first one';

test('render empty page', async () => {
    render(
        <Provider store={store}>
            <Router>
                <LeaderboardPage />
            </Router>
        </Provider>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(emptyTxt)).toBeInTheDocument();
    expect(mockedApi).toHaveBeenCalledTimes(1);
});

test('render page with winners', async () => {
    mockedApi.mockResolvedValueOnce(answer);
    render(
        <Provider store={store}>
            <Router>
                <LeaderboardPage />
            </Router>
        </Provider>
    );

    await waitFor(() => expect(screen.queryByText(emptyTxt)).not.toBeInTheDocument());
    answer.forEach((winner) => expect(screen.getByText(winner.data.name)).toBeInTheDocument());
});
