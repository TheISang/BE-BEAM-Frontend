module.exports = {
  parser: '@typescript-eslint/parser', // TS용 파서
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Prettier 통합
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 포맷 위반 시 에러
    'react/react-in-jsx-scope': 'off', // React 17+ 불필요
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전 자동 감지
    },
  },
};
