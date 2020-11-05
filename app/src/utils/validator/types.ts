export type ValidatorResult = {
    wasError: boolean;
    errors: {
        [fieldName: string]: string[];
    };
};

export type ValidatorParams = {
    [key: string]: string;
};

export type ValidationMethods = {
    [key: string]: ValidationMethod;
};

export type ValidationMethod = (val: string, arg?: number) => boolean;
