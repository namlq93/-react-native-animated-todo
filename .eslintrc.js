module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-shadow': 'off',
    // Viet stylesheet ở dưới cùng không bị báo lỗi phải viết trước khi sử dụng style
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/style-prop-object': 'off',
    //cho phép truyền dưới dạng {...props}
    // 'react/jsx-props-no-spreading': 'off',
    'global-require': 'off', //cho phep truyen require trong url anh
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  },
};
