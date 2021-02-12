import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import * as React from 'react';

import {Copyright} from './Copyright';

test('render copyright', async () => {
    const name = 'Dima';

    render(<Copyright />);
    expect(screen.getByText(name)).toBeInTheDocument();
});
