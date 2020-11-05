import {ValidationMethods} from '../types';
import isEmail from './isEmail';
import maxLength from './maxLength';
import minLength from './minLength';
import required from './required';

const functions: ValidationMethods = {
    'max-length': maxLength,
    'min-length': minLength,
    email: isEmail,
    required
};

export default functions;
