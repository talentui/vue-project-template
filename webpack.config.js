const path = require('path');
module.exports = require('@talentui/webpack-config')({
    entry: './main.js',
    engines: ['vue'],
    moduleScope: path.resolve(__dirname, './src'),
    alias: {
        vue: 'vue/dist/vue.js'
    }
})