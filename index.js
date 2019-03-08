module.exports = {
  extends: [
    'react-app', // create-react-app defaults
    // Note we don't use @typescript-eslint/recommended as want to enable just some specific rules
  ],
  plugins: ['@typescript-eslint', 'import', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // rules from https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    // that BC thinks are useful
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ], // functions are hoisted so ok to use before they're defined
    '@typescript-eslint/no-object-literal-type-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_', // allow vars prefixed _
        argsIgnorePattern: '^_', // allow args prefixed _
        ignoreRestSiblings: true,
      },
    ],

    // rules from https://www.npmjs.com/package/eslint-plugin-import
    // that BC thinks are useful
    'import/first': 'warn',
    'import/no-duplicates': 'warn',
    'import/order': [
      'warn',
      {
        // libraries first, then local files
        groups: ['external', 'internal'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      "typescript": {}
    },
  },
  globals: {
    window: true,
    document: true,
  },
  // disable some JS-specific rules that don't work in TS
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
        'no-unexpected-multiline': ['off'], // causes problems with TypeScript styled-component definitions
      },
    },
  ],
};
