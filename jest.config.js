module.exports = {
    verbose: true,
    moduleNameMapper: {
        '~(.*)$': '<rootDir>/app/src/$1',
        '\\.(scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },

    setupFilesAfterEnv: ['./jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: './app/tsconfig.json'
        }
    }
};
