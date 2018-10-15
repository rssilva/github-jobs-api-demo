module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    'fetch': true,
    'describe': true,
    'it': true,
    'beforeEach': true,
    'afterEach': true,
    'expect': true
  },
  rules: {
    eqeqeq: 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off'
  }
}
