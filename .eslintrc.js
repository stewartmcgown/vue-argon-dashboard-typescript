module.exports = {
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:vue/recommended"],
    "rules": {
        "no-console": "off",
        "@typescript-eslint/no-implicit-any": "off"
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