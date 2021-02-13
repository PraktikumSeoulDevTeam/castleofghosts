module.exports = {
    verbose: true,
    moduleNameMapper: {
        '~(.*)$': '<rootDir>/app/src/$1',
        '\\.(scss)$': 'identity-obj-proxy'
    }
};
