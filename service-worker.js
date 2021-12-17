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
    "revision": "bb83f1a8c3f27255364e3aea59f5d5d4"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8dfc177e.js",
    "revision": "08072bfc56c52ecceb881da9cf6333f6"
  },
  {
    "url": "assets/js/11.30352424.js",
    "revision": "ea31f3cc86b9f3e9d6a925616ef7ac7a"
  },
  {
    "url": "assets/js/12.ceb5e195.js",
    "revision": "bcb0b989032856e7b8e1f6eb6e26bbec"
  },
  {
    "url": "assets/js/13.a5453056.js",
    "revision": "d845a45fc863991f62f6b36225bd10c9"
  },
  {
    "url": "assets/js/14.07599b92.js",
    "revision": "a08d6424d3fbe5c19f738e41cc154b53"
  },
  {
    "url": "assets/js/15.17e3767a.js",
    "revision": "4a83a04fc89ca11fa6ae264c18792dbb"
  },
  {
    "url": "assets/js/16.3d03d758.js",
    "revision": "3d5209979de823498a1d0a3fd5738618"
  },
  {
    "url": "assets/js/17.889e7e83.js",
    "revision": "b91cfbbdb8c73b4aa779deb2efbdef2c"
  },
  {
    "url": "assets/js/18.565ee184.js",
    "revision": "115580aaba3a2ca947198367d7f8158e"
  },
  {
    "url": "assets/js/2.2df0dd4d.js",
    "revision": "a6e2ccb034dfd9679460c7525271b0e1"
  },
  {
    "url": "assets/js/3.71da1138.js",
    "revision": "08b71826cda90266da3b9174da25559e"
  },
  {
    "url": "assets/js/4.4207a5fa.js",
    "revision": "b50cd276ad16ddacca401f26f57164ff"
  },
  {
    "url": "assets/js/5.2193acf9.js",
    "revision": "b5cce6d2156f8b60b64981d85c1b8c82"
  },
  {
    "url": "assets/js/6.3e1aee56.js",
    "revision": "54fbcd06cf55b96e75e4f5f9090578d0"
  },
  {
    "url": "assets/js/7.848692a7.js",
    "revision": "6282dc179733ed12316b1845cabdf598"
  },
  {
    "url": "assets/js/8.001a8a36.js",
    "revision": "f3700a8b789cd6c21aca80d529197193"
  },
  {
    "url": "assets/js/9.ecdb3c1a.js",
    "revision": "23b5ff6cb65dcc785752cefdf714ee2f"
  },
  {
    "url": "assets/js/app.04b4e073.js",
    "revision": "9e4b3a1534761f4e7e5b97b1e54f6cc1"
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
    "revision": "7204b257f2b682086dff39e5d827f173"
  },
  {
    "url": "yuedu/index.html",
    "revision": "ed7fe2d7420fd4820352218885e8eb33"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "c703cc55795ca7746fba3c0719d4c77d"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "29916a9154ff5883cd256089e5f1da74"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "59223706235ff63d0780a7d7d495654f"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "fe9dc01fac9e33973de099c17ebdaf59"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "cd22b3bd30513c03fe36d39226af1d18"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "128fbdb394323cc0c58825c1412d9938"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "2b84229c8cf5201065c87e8d191dc412"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "5befc898f068889f421ff73ca43b78ac"
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