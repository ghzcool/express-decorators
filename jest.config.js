module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src"
  ],
  "collectCoverage": true,
  "coverageReporters": [
    "json",
    "lcov",
    "html",
    "text"
  ]
}