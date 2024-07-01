module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@next/next/recommended',
      'plugin:react/jsx-runtime',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['react-refresh'],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Enforce removal of extra quotation marks around expressions where they aren't required
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
  
       // Enforce a consistent indentation of 2 spaces, including switch case statements
       'indent': ['error', 2, { 'SwitchCase': 1 }],
  
       // Require a space before the opening brace of blocks
       'space-before-blocks': 'error',
   
       // Enforce consistent spacing before and after keywords like if, else, for, while, etc.
       'keyword-spacing': ['error', { 'before': true, 'after': true }],
   
       // Require spacing around operators (e.g., =, +, -, <, >, etc.)
       'space-infix-ops': 'error',
   
       // Ensure that files end with a single newline
       'eol-last': ['error', 'always'],
   
       // Enforce a newline after each call in a method chain if the chain is longer than two calls
       'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
   
       // Disallow whitespace between the object and the property in a member expression
       'no-whitespace-before-property': 'error',
   
       // Disallow spaces directly inside parentheses
       'space-in-parens': ['error', 'never'],
   
       // Enforce consistent spacing before the parentheses in function definitions
       'space-before-function-paren': ['error', {
         'anonymous': 'always',   // Always require a space for anonymous functions
         'named': 'never',        // Never allow a space for named functions
         'asyncArrow': 'always'   // Always require a space for async arrow functions
       }],
   
       // Enforce spaces for word unary operators and disallow them for nonword unary operators
       'space-unary-ops': ['error', {
         'words': true,   // E.g., new, delete, typeof, void, yield
         'nonwords': false // E.g., -, +, --, ++, !, !!
       }],
   
       // Enforce consistent spacing after the // or /* in a comment
       'spaced-comment': ['error', 'always', {
         'line': {
           'markers': ['/'],    // Line comment markers
           'exceptions': ['-', '+'] // Exceptions for line comments
         },
         'block': {
           'markers': ['!'],    // Block comment markers
           'exceptions': ['*'], // Exceptions for block comments
           'balanced': true     // Balanced spacing for block comments
         },
       }],
       'no-undef': 'off',
       'react/prop-types': 'off', // Disable prop-types validation
    },
  }
  