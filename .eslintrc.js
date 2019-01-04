module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "globals": {
    "document": true,
    "window": true
  },
  "rules": {
    "no-unused-vars": [2, { "varsIgnorePattern": "^React$" }],
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/no-unknown-property": [1, { "ignore": ["class"] }],
    "react/jsx-uses-vars": [2],
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "react/prefer-stateless-function": 0,
    "lines-between-class-members": 0,
    "prefer-destructuring": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/no-unused-prop-types": 0,
    "react/default-props-match-prop-types": 0,
    "jsx-a11y/alt-text": 0,
    "import/extensions": 0,
    "linebreak-style": 0
  }
};