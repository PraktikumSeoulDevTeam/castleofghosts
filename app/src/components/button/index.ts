import {memo} from 'react';

import {Button as Btn} from './Button';
import {OwnProps} from './types';

export const Button = memo<OwnProps>(Btn);
