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

    for (const key of Object.keys(params)) {
        const splitString = params[key].split('|');

        for (const param of splitString) {
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
        }
    }

    return validate(config);
}

function validate(validatorConfig: ValidatorConfig): (userData: ValidatorUserData) => ValidatorResult {
    return (userData: ValidatorUserData): ValidatorResult => {
        const result: ValidatorResult = {
            wasError: false,
            errors: {}
        };

        for (const fieldName of Object.keys(userData)) {
            const fieldValue = userData[fieldName];
            let validationResult = '';

            for (const {func, funcName, arg} of validatorConfig[fieldName]) {
                const res = func(fieldValue, arg);
                if (!res) {
                    validationResult = getText(funcName, arg);
                    break;
                }
            }

            if (validationResult.length) {
                result.wasError = true;
                result.errors[fieldName] = validationResult;
            }
        }

        return result;
    };
}
