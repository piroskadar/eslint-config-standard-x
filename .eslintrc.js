/**
 * @file Manages the root configuration settings for project wide eslint.
 * @copyright Copyright (c) 2017-present, ProReNata AB
 * @module eslint/root/configuration
 * @see {@link https://eslint.org} for further information.
 */

/**
 * Eslint rules that differ from airbnb base.
 *
 * @see {@link https://eslint.org/docs/rules/|rules}
 */
var eslintAgreed = {
  camelcase: ['error', {properties: 'never'}], // because Eketorp's property names are camel_case
  curly: ['error', 'all'],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import']
    },
    {blankLine: 'any', next: 'import', prev: 'import'},
    {blankLine: 'any', next: 'export', prev: 'export'},
    {blankLine: 'always', next: 'export', prev: 'import'},
    {blankLine: 'always', next: 'import', prev: 'export'},
    {blankLine: 'always', next: 'return', prev: '*'},
    {blankLine: 'always', next: 'if', prev: '*'}
  ],
  'no-param-reassign': [
    'error',
    {
      props: false
    }
  ],
  'no-console': 'off',
  'no-debugger': 'error',
  'comma-dangle': ['error', 'never'],
  'sort-keys': 'off',
  'no-magic-numbers': 'off',
  'multiline-comment-style': ['warn', 'starred-block'],
  'function-paren-newline': ['error', 'multiline'],
  'lines-between-class-members': 'off',
  'no-compare-neg-zero': 'error',
  'nonblock-statement-body-position': 'error',
  indent: ['error', 2],
  'global-require': 'warn',
  'max-params': ['error', 3],
  'block-scoped-var': 'warn',
  'max-nested-callbacks': ['warn', 3],
  'id-length': ['error', {min: 1, max: 25, properties: 'never'}],
  'implicit-arrow-linebreak': 'off',
  'max-statements': ['warn', 10],
  complexity: ['error', 20],
  'max-lines': [
    'warn',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'no-async-promise-executor': 'off',
  'no-misleading-character-class': 'error',
  'require-atomic-updates': 'off',
  'require-unicode-regexp': 'off',
  'prefer-named-capture-group': 'off'
};

/**
 * Additional ESLint rules for ESLint's directive-comments.
 *
 * @see {@link https://github.com/mysticatea/eslint-plugin-eslint-comments|plugin}
 */
var eslintComments = {
  'eslint-comments/disable-enable-pair': 'error',
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
  'eslint-comments/no-restricted-disable': 'error',
  'eslint-comments/no-use': 'warn'
};

/**
 * Switch-case-specific linting rules for ESLint.
 *
 * @see {@link https://github.com/lukeapage/eslint-plugin-switch-case|plugin}
 */
var eslintSwitchCase = {
  'switch-case/no-case-curly': 'error',
  'switch-case/newline-between-switch-case': ['error', 'always', {fallthrough: 'never'}]
};

/**
 * An ESlint rule plugin companion to babel-eslint.
 *
 * @see {@link https://github.com/babel/eslint-plugin-babel|plugin}
 */
var classProperty = {
  'babel/camelcase': ['error', {properties: 'never'}], // because Eketorp's property names are camel_case
  'babel/new-cap': 'error',
  'babel/no-invalid-this': 'error',
  'babel/object-curly-spacing': 'error',
  'babel/quotes': ['error', 'single', {avoidEscape: true}],
  'babel/semi': 'error',
  'babel/no-unused-expressions': 'error',
  'babel/valid-typeof': 'error'
};

/**
 * Lint the browser compatibility of your code.
 * Good to know during development so we make sure that we have all polyfill and transforms.
 *
 * @see {@link https://github.com/amilajack/eslint-plugin-compat|plugin}
 */
var compat = {
  'compat/compat': 'warn'
};

/**
 * Helps you in tracking down problems when you are using css-modules.
 *
 * @see {@link https://github.com/atfzl/eslint-plugin-css-modules|plugin}
 */
var cssModules = {
  'css-modules/no-undef-class': 'warn',
  'css-modules/no-unused-class': 'off'
};

/**
 * ESLint plugin to prevent use of extended native objects.
 *
 * @see {@link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native|plugin}
 */
var extendNative = {
  'no-use-extend-native/no-use-extend-native': 'error'
};

/**
 * ESLint plugin with rules that help validate proper imports.
 *
 * @see {@link https://github.com/benmosher/eslint-plugin-import|plugin}
 */
var importExport = {
  // off because of false positives currently
  'import/no-relative-parent-imports': 'off',
  'import/dynamic-import-chunkname': 'off',
  'import/group-exports': 'off',
  'import/no-cycle': 'off',
  'import/no-default-export': 'off',
  'import/no-named-export': 'off',
  'import/exports-last': 'off',
  'import/no-self-import': 'off',
  'import/no-useless-path-segments': 'off',
  'import/no-unresolved': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-unused-modules': 'off',
  'import/extensions': 'off',
  'import/first': 'off',
  'import/max-dependencies': 'off',
  'import/newline-after-import': 'off',
  'import/no-absolute-path': 'off',
  'import/no-amd': 'off',
  'import/no-anonymous-default-export': 'off',
  'import/no-commonjs': 'off',
  'import/no-deprecated': 'off',
  'import/no-dynamic-require': 'off',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'off',
  'import/no-named-default': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-unassigned-import': 'off',
  'import/no-webpack-loader-syntax': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'import/unambiguous': 'off'
};

/**
 * ESLint plugin for Jest.
 *
 * @see {@link https://github.com/jest-community/eslint-plugin-jest|plugin}
 */
var jest = {
  'jest/prefer-inline-snapshots': 'off',
  'jest/no-alias-methods': 'error',
  'jest/consistent-test-it': 'error',
  'jest/lowercase-name': 'error',
  'jest/no-disabled-tests': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'error',
  'jest/no-identical-title': 'error',
  'jest/no-jasmine-globals': 'off', // off because of false positives currently
  'jest/no-jest-import': 'error',
  'jest/no-large-snapshots': 'error',
  'jest/no-truthy-falsy': 'error',
  'jest/expect-expect': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/prefer-expect-assertions': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/prefer-strict-equal': 'error',
  'jest/prefer-to-be-null': 'error',
  'jest/prefer-to-be-undefined': 'error',
  'jest/prefer-to-contain': 'error',
  'jest/prefer-to-have-length': 'error',
  'jest/require-tothrow-message': 'error',
  'jest/valid-describe': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-expect': 'error',
  'jest/no-test-callback': 'error',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-called-with': 'off',
  'jest/prefer-todo': 'error',
  'jest/no-empty-title': 'error',
  'jest/no-mocks-import': 'off',
  'jest/no-commented-out-tests': 'off',
  'jest/no-duplicate-hooks': 'warn',
  'jest/no-if': 'warn',
  'jest/no-export': 'off',
  'jest/no-try-expect': 'off',
  'jest/no-standalone-expect': 'off',
  'jest/no-expect-resolves': 'error'
};

/**
 * JSDoc specific linting rules for ESLint.
 *
 * @see {@link https://github.com/gajus/eslint-plugin-jsdoc|plugin}
 */
var jsdoc = {
  'jsdoc/require-returns-description': 'warn',
  'jsdoc/require-param': 'warn',
  'jsdoc/check-types': 'warn',
  'jsdoc/newline-after-description': 'warn',
  'jsdoc/require-description-complete-sentence': 'warn',
  'jsdoc/require-example': 'off',
  'jsdoc/check-tag-names': 'warn',
  'jsdoc/check-param-names': 'warn',
  'jsdoc/require-description': 'off',
  'jsdoc/require-param-description': 'warn',
  'jsdoc/require-param-type': 'warn',
  'jsdoc/require-hyphen-before-param-description': 'warn',
  'jsdoc/require-returns-type': 'warn',
  'jsdoc/no-undefined-types': 'warn',
  'jsdoc/require-param-name': 'warn',
  'jsdoc/valid-types': 'warn',
  'jsdoc/check-examples': 'warn',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-check': 'off',
  'jsdoc/check-alignment': 'error',
  'jsdoc/check-indentation': 'off',
  'jsdoc/check-syntax': 'error',
  'jsdoc/require-jsdoc': 'off',
  'jsdoc/implements-on-classes': 'off',
  'jsdoc/match-description': 'off',
  'jsdoc/no-types': 'off'
};

/**
 * ESLint rules for lodash.
 *
 * @see {@link https://github.com/wix/eslint-plugin-lodash|plugin}
 */
var lodash = {
  'lodash/prefer-constant': 'off',
  'lodash/prefer-get': 'off',
  'lodash/prefer-includes': 'off',
  'lodash/prefer-is-nil': 'off',
  'lodash/prefer-lodash-chain': 'off',
  'lodash/prefer-lodash-method': 'off',
  'lodash/prefer-lodash-typecheck': 'off',
  'lodash/prefer-matches': 'off',
  'lodash/prefer-noop': 'off',
  'lodash/prefer-over-quantifier': 'off',
  'lodash/prefer-some': 'off',
  'lodash/prefer-startswith': 'off',
  'lodash/prefer-times': 'off'
};

/**
 * ESLint rule for prettier.
 *
 * @see {@link https://prettier.io/docs/en/eslint.html|plugin}
 */
var prettier = {
  'prettier/prettier': 'error'
};

var promise = {
  'promise/prefer-await-to-callbacks': 'off',
  'promise/prefer-await-to-then': 'off'
};

/** Configuration. */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments|env}
   */
  env: {
    commonjs: true,
    es6: false
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files|extends}
   */
  extends: [
    '@ljharb',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:lodash/recommended',
    'plugin:css-modules/recommended',
    'plugin:switch-case/recommended'
  ],

  /**
   * You can define global variables here.
   *
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals|globals}
   */
  globals: {},

  /**
   * Sometimes a more fine-controlled configuration is necessary, for example if the configuration
   * for files within the same directory has to be different.
   *
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns|overrides}
   */
  overrides: [
    {
      files: ['__tests__/**/*.js', 'postcss.config.js', 'webpack.*.js', '.eslintrc.js'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true
          }
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        'lodash/prefer-is-nil': 'off',
        'lodash/prefer-noop': 'off',
        'func-names': 'off',
        'no-new-func': 'off',
        'promise/avoid-new': 'off',
        'no-restricted-globals': 'off',
        complexity: 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'compat/compat': 'off',
        'max-lines': 'off'
      },
      env: {
        node: true,
        es6: true
      },
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        },
        ecmaVersion: 2019,
        parser: 'babel-eslint',
        sourceType: 'module'
      }
    },
    {
      files: ['webpack.*.js'],
      env: {
        browser: true,
        shelljs: true
      },
      rules: {
        strict: 'off',
        camelcase: ['error', {properties: 'never'}],
        'babel/camelcase': ['error', {properties: 'never'}]
      }
    },
    {
      files: ['__tests__/**/*.js'],
      env: {
        atomtest: true,
        browser: true,
        commonjs: true,
        embertest: true,
        jasmine: true,
        jest: true,
        mocha: true,
        phantomjs: true,
        qunit: true
      }
    }
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options|parserOptions}
   */
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    },
    ecmaVersion: 5,
    parser: 'babel-eslint',
    sourceType: 'script'
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins|plugins}
   */
  plugins: [
    'babel',
    'compat',
    'css-modules',
    'eslint-comments',
    'html',
    'jsdoc',
    'json',
    'lodash',
    'no-use-extend-native',
    'prettier',
    'promise',
    'switch-case'
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy|root}
   */
  root: false,

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules|rules
   */
  rules: Object.assign(
    {},
    eslintSwitchCase,
    importExport,
    promise,
    classProperty,
    eslintAgreed,
    compat,
    extendNative,
    eslintComments,
    lodash,
    prettier,
    cssModules,
    jest,
    jsdoc
  ),

  /**
   * Webpack-literate module resolution plugin for eslint-plugin-import.
   *
   * @see {@link https://www.npmjs.com/package/eslint-import-resolver-webpack|plugin}
   */
  settings: {
    'html/html-extensions': [
      '.erb',
      '.handlebars',
      '.hbs',
      '.htm',
      '.html',
      '.mustache',
      '.nunjucks',
      '.php',
      '.tag',
      '.twig',
      '.we'
    ],
    'import/resolver': {
      node: {},
      webpack: {
        config: 'webpack.config.js'
      }
    },
    polyfills: []
  }
};
