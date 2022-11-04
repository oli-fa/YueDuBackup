/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ebc8b1b1b382774042d57478a0715535"
  },
  {
    "url": "assets/css/0.styles.cc3511f1.css",
    "revision": "feef9c59e66649992d120c509d4f8b04"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.610c01e5.js",
    "revision": "5a36ff2db3b8cbf6243e8c18bb930582"
  },
  {
    "url": "assets/js/11.60692a5c.js",
    "revision": "bdb6bb6eb591b21ec0af2d82cada31c1"
  },
  {
    "url": "assets/js/12.dd6b80ba.js",
    "revision": "39e4fda3cb1af94cd50e911efda5b82e"
  },
  {
    "url": "assets/js/13.21739874.js",
    "revision": "ac260b780f7f5413fccdb830898dca71"
  },
  {
    "url": "assets/js/14.aea20886.js",
    "revision": "d59f30848319230f1a8b342b5b356a47"
  },
  {
    "url": "assets/js/15.7686e83f.js",
    "revision": "2d149aa5b6b4a687f08b775e4737404e"
  },
  {
    "url": "assets/js/16.fbb9fe30.js",
    "revision": "87af9e6ecfdfba8030e2c9cf3b2d8485"
  },
  {
    "url": "assets/js/17.d4c3b2df.js",
    "revision": "388f942361f22f1c53a30a34a55d72bd"
  },
  {
    "url": "assets/js/18.d7a85671.js",
    "revision": "edf2cacf76c1758d9b2dec32f75fb213"
  },
  {
    "url": "assets/js/19.37c5f1ef.js",
    "revision": "1f3140549c50959b92aa263d1ec7cb50"
  },
  {
    "url": "assets/js/2.595d4bb1.js",
    "revision": "58064136564e5f31426c5d2830339754"
  },
  {
    "url": "assets/js/20.73c19742.js",
    "revision": "bcb1795e05f56192245e01715ca3e359"
  },
  {
    "url": "assets/js/21.b3b51051.js",
    "revision": "b033d190c295f368baa6a64a7378b5f2"
  },
  {
    "url": "assets/js/3.0510e3cc.js",
    "revision": "9afcf211bfc40c9325fbf37370aa8588"
  },
  {
    "url": "assets/js/4.dc1def71.js",
    "revision": "f1b2eba27ed3a6045671859c76a930da"
  },
  {
    "url": "assets/js/5.1acb68e9.js",
    "revision": "0f75751c0927b3f8847d07e283bf54ae"
  },
  {
    "url": "assets/js/6.d6f3503c.js",
    "revision": "b3864532eeab5569455c4783909ea78d"
  },
  {
    "url": "assets/js/7.dcbf77ed.js",
    "revision": "b66ab132a9386d4e892b08765496d2c4"
  },
  {
    "url": "assets/js/8.7e89c0e1.js",
    "revision": "7aef30b8134e22e79aaed7fccc0b44ac"
  },
  {
    "url": "assets/js/9.610021c8.js",
    "revision": "c96bb8fdebe0da6c08c25f00807f49fc"
  },
  {
    "url": "assets/js/app.428f5b12.js",
    "revision": "c0d9bc96be86dced3ee5fb2fbfc0de25"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "9c92a3ed7b834cd6c344bd31f8a6fe61"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "697e6faa62ec49655910379578c6e754"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3b79c26acf3d169f750e4ddb414d38ba"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "dea50cc2ea17c63fd6c2974472f36c78"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "40495209221f6c3493367cbeb328c413"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "7a9516e68406f62bd897e4b71a9d0fcc"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8d17c5e902f282254de021f011feb2bd"
  },
  {
    "url": "index.html",
    "revision": "9d9d83ca6a1ccb00f715d9eb9439816e"
  },
  {
    "url": "yuedu/index.html",
    "revision": "1b5a88191ba9c8c3f5bf0a61c2e7f434"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "66cd1edf60a39caf965bda95224aad52"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "612373ee491641ff632fda586e595042"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "eaa1181e4fcd44f0ec8596dd3c4fee51"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "06293869c4a3744edab3d3a22f95db29"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "02715b13a57b81800b22583e9643ab8a"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "2842682c195aac85378dd146f3a2dfda"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "5fa7871d10940eee64b218425fc8e2f6"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "cfe7c4c6e1693d996d39a1118901080e"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "ccf4b0542e19d5f971a681cc5c153d1e"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "a814be4f89aaf042be4e10c3b41abfce"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "0e92136f08fc1a338a2840e650574274"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
