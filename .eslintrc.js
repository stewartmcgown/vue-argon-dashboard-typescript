module.exports = {
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:vue/recommended"],
    "rules": {
        "no-console": 0,
        "@typescript-eslint/no-implicit-any": false
    },
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
    },
    "plugins": ["@typescript-eslint"]
}