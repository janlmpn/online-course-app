module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    setupFiles: ['<rootDir>/.env.test'],
    verbose: true,
  };
  