const headConf = require('./config/headConfig.js')
const pluginsConf = require('./config/pluginsConfig.js')
const navConf = require('./config/navConfig.js')
const sidebarConf = require('./config/sidebarConfig.js')


module.exports = {
    title: '阅读文档',
    description: 'YueDu VuePress docs',
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: sidebarConf,
        sidebarDepth: 2
    },
    markdown: {
        lineNumbers: true
    }
}