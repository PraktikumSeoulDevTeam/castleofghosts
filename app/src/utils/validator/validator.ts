import {ValidatorResult, ValidatorParams, ValidationMethods, ValidatorConfig, ValidatorUserData} from './types';
import validatorFunctions from './functions';
import getText from './errorText';

/**
 * params looks like:
 * {
 *    "email": "required|email|max-length: 50|min-length: 30",
 *    "login": "required|max-length: 30|min-length:20"
 * }
 */
export default function validator(params: ValidatorParams): ReturnType<typeof validate> {
    /**
     * validation functions
     */
    const functions: ValidationMethods = {
        ...validatorFunctions
    };

    const config: ValidatorConfig = {};
    Object.keys(params).forEach((key) => {
        const splitString = params[key].split('|');

        splitString.forEach((param) => {
            let func = param.trim();
            let arg = null;

            if (param.includes(':')) {
                [func, arg] = param.split(':').map((s) => s.trim());
            }

            if (config[key] === undefined) {
                config[key] = [];
            }

            if (functions[func] !== undefined) {
                config[key].push({
                    funcName: func,
                    func: functions[func],
                    arg
                });
            } else throw Error(`unknow validation function (${func})`);
        });
    });

    return validate(config);
}

function validate(validatorConfig: ValidatorConfig): (userData: ValidatorUserData) => ValidatorResult {
    return (userData: ValidatorUserData): ValidatorResult => {
        const result: ValidatorResult = {
            wasError: false,
            errors: {}
        };

        Object.keys(userData).forEach((fieldName) => {
            const fieldValue = userData[fieldName];

            const validationResult = [];
            validatorConfig[fieldName].forEach(({func, funcName, arg}) => {
                const res = func(fieldValue, arg);
                if (!res && validationResult.length === 0) {
                    validationResult.push(getText(funcName, arg));
                }
            });

            if (validationResult.length !== 0) {
                result.wasError = true;
                result.errors[fieldName] = validationResult;
            }
        });

        return result;
    };
}
