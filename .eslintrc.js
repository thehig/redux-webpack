// Install NPM Modules:
// yarn add eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-immutable --dev

module.exports = {
    "parser": "babel-eslint",

    // Globals:                               // http://eslint.org/docs/user-guide/configuring#specifying-globals
    "globals": {
        // "foo": true
    },

    // Parser Options:                        // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    // Environment:                         // http://eslint.org/docs/user-guide/configuring#specifying-environments
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },

    // Plugins :                            // http://eslint.org/docs/user-guide/configuring#configuring-plugins
    "plugins": [
        "react",                            // https://www.npmjs.com/package/eslint-plugin-react
        // "import",                           // https://www.npmjs.com/package/eslint-plugin-import
        "immutable",                        // https://www.npmjs.com/package/eslint-plugin-immutable
        // "redux",
    ],

    // Extends:                             // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
    "extends": [
        "eslint:recommended",               // http://eslint.org/docs/rules/
        "plugin:react/recommended",         // https://github.com/yannickcr/eslint-plugin-react#recommended
        // "plugin:import/recommended",
    ],

    // Rules:                               // http://eslint.org/docs/user-guide/configuring#configuring-rules
    "rules": {
        // Generic Rules:
        "no-console": "warn",
        "no-unused-vars": "warn",

        // Immutable rules                  // https://github.com/jhusain/eslint-plugin-immutable
        "no-var": "error",
        "no-undef": "error",
        "no-param-reassign": "error",
        "immutable/no-let": "warn",
        "immutable/no-this": "warn",
        "immutable/no-mutation": "warn"
    }
}