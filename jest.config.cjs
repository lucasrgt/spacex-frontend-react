const config = {
  roots: ['<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>/test/**/*.ts'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
