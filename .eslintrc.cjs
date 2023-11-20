module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      files: ['**/*.stories.tsx', '**/*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
        'react-hooks/rules-of-hooks': 0
      }
    }
  ],
  ignorePatterns: [
    '*.cjs',
    'src/lib/setup.mjs',
    'scripts/*.mjs',
    'getContentfulEnvironment.js',
    'lighthouserc.js',
    '*.setup.js',
    '*.config.js',
    'out',
    'public',
    'storybook-static',
    'coverage',
    '.storybook'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsdoc'],
  rules: {
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: [
          'FunctionDeclaration',
          'ArrowFunctionExpression',
          'FunctionExpression'
        ],
        publicOnly: true,
        exemptEmptyFunctions: true
      }
    ],
    'jsdoc/require-param': 0, // too verbose
    'jsdoc/check-param-names': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'function-paren-newline': 0,
    'prefer-promise-reject-errors': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/indent': 0,
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    curly: ['warn', 'all'],
    'prettier/prettier': [
      'warn',
      {
        parser: 'typescript'
      }
    ],
    'max-statements-per-line': [
      'warn',
      {
        max: 1
      }
    ],
    'func-style': [
      'warn',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'object-curly-newline': [
      'warn',
      {
        ImportDeclaration: { consistent: true },
        ExportDeclaration: { consistent: true }
      }
    ],
    '@typescript-eslint/semi': ['warn', 'always'],
    'no-console': ['error'],
    'react/jsx-wrap-multilines': ['error', { prop: false }]
  }
};
