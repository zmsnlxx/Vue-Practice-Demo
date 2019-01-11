module.exports = {
  root: true,
  env: {browser: true, node: true, es6: true, worker: true},
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {sourceType: 'module', parser: 'babel-eslint', ecmaFeatures: {legacyDecorators: true}},
  rules: {
    "vue/html-end-tags": 'error',
    "vue/require-prop-types": 'error',
    "vue/no-multi-spaces": 'error',
    "vue/no-v-html": 'error',
    "vue/this-in-template": ['error', "never"],
    "vue/prop-name-casing": ['error', "camelCase"],
    "vue/name-property-casing": ['error', "PascalCase"],
    "vue/html-self-closing": [
      'error',
      {
        html: {void: "never", normal: "always", component: "always"},
        svg: "always",
        math: "always"
      }
    ],
    "vue/html-indent": [
      'error',
      "tab",
      {
        "attribute": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    "vue/attribute-hyphenation": ['error', "always", {ignores: ["custom-prop"]}],
    "vue/mustache-interpolation-spacing": ['error', "always"],
    
    "eqeqeq": ["error", "always"],
    "arrow-spacing": "error",
    "no-var": "error",
    "prefer-const": "error",
	  'no-unused-vars': 0,
  },
}
