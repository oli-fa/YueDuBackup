const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        },
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true
}