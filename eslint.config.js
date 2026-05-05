const {
    defineConfig,
} = require("eslint/config");

const jsdoc = require("eslint-plugin-jsdoc");

module.exports = defineConfig([{
    plugins: {
        jsdoc,
    },

    rules: {
        "jsdoc/require-description": "error",
        "jsdoc/check-values": "error",
    },
}]);