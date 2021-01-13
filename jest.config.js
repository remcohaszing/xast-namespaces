module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: { 'ts-jest': { isolatedModules: true } },
  collectCoverageFrom: ['src/**/*.ts'],
};
