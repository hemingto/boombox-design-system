/** @type {import('jest').Config} */
module.exports = {
  // Use the projects configuration for monorepo setup
  projects: [
    {
      displayName: 'components',
      testMatch: ['<rootDir>/packages/components/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/components/src/$1',
        '^@boombox/tokens$': '<rootDir>/packages/tokens/src',
        '^@boombox/utils$': '<rootDir>/packages/utils/src',
        '^@boombox/icons$': '<rootDir>/packages/icons/src',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/components/tsconfig.json'
        }],
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
      collectCoverageFrom: [
        'packages/components/src/**/*.{ts,tsx}',
        '!packages/components/src/**/*.d.ts',
        '!packages/components/src/**/*.stories.{ts,tsx}',
        '!packages/components/src/**/index.ts',
      ],
    },
    {
      displayName: 'tokens',
      testMatch: ['<rootDir>/packages/tokens/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'node',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/tokens/src/$1',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/tokens/tsconfig.json'
        }],
      },
      collectCoverageFrom: [
        'packages/tokens/src/**/*.{ts,tsx}',
        '!packages/tokens/src/**/*.d.ts',
        '!packages/tokens/src/**/index.ts',
      ],
    },
    {
      displayName: 'utils',
      testMatch: ['<rootDir>/packages/utils/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/utils/src/$1',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/utils/tsconfig.json'
        }],
      },
      collectCoverageFrom: [
        'packages/utils/src/**/*.{ts,tsx}',
        '!packages/utils/src/**/*.d.ts',
        '!packages/utils/src/**/index.ts',
      ],
    },
    {
      displayName: 'icons',
      testMatch: ['<rootDir>/packages/icons/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/icons/src/$1',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/icons/tsconfig.json'
        }],
      },
      collectCoverageFrom: [
        'packages/icons/src/**/*.{ts,tsx}',
        '!packages/icons/src/**/*.d.ts',
        '!packages/icons/src/**/index.ts',
      ],
    },
    {
      displayName: 'email',
      testMatch: ['<rootDir>/packages/email/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/email/src/$1',
        '^@boombox/tokens$': '<rootDir>/packages/tokens/src',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/email/tsconfig.json'
        }],
      },
      collectCoverageFrom: [
        'packages/email/src/**/*.{ts,tsx}',
        '!packages/email/src/**/*.d.ts',
        '!packages/email/src/**/index.ts',
      ],
    },
    {
      displayName: 'content',
      testMatch: ['<rootDir>/packages/content/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'node',
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/packages/content/src/$1',
      },
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
          tsconfig: 'packages/content/tsconfig.json'
        }],
      },
      collectCoverageFrom: [
        'packages/content/src/**/*.{ts,tsx}',
        '!packages/content/src/**/*.d.ts',
        '!packages/content/src/**/index.ts',
      ],
    },
  ],
  
  // Global configuration
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  
  // Coverage reporting
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: '<rootDir>/coverage',
  
  // Test timeout
  testTimeout: 10000,
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Verbose output
  verbose: true,
  
  // Watch plugins
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}; 