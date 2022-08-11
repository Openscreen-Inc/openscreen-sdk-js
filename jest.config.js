module.exports = {
  displayName: {
    name: 'SDK',
    color: 'blue',
  },
  testEnvironment: 'node',
  testTimeout: 30000,
  roots: ['<rootDir>/test'],
  // TEST FILES ARE OF THE FOLLOWING PATTERN (OTHER FILES ARE IGNORED):
  //   test/000-name.js
  //   test/000-name.ts
  //   test/OP-999-name.js
  //   test/OP-999-name.ts
  testMatch: ['**/test/**/[0-9]+-*.[jt]s?(x)', '**/test/**/OP-[0-9]+-*.[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.js$': 'esbuild-jest',
  },
}
