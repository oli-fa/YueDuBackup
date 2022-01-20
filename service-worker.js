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
    "revision": "71482b90adf3679ae4af46d5abab23e8"
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
    "url": "assets/js/10.3cacca95.js",
    "revision": "2940cd6ae004fb12db0e56977f59ebea"
  },
  {
    "url": "assets/js/11.3102c4ae.js",
    "revision": "becdb681d15089816e32cdbd36ac6df6"
  },
  {
    "url": "assets/js/12.f1e3ece6.js",
    "revision": "7000dd2cfba6bd661223a2c51cafe886"
  },
  {
    "url": "assets/js/13.ceaab184.js",
    "revision": "612656f2216f3d6dc9ee5e71b443f49b"
  },
  {
    "url": "assets/js/14.86b971ce.js",
    "revision": "0a2ad0b269f93a8553b520b358cc83b5"
  },
  {
    "url": "assets/js/15.006a2db8.js",
    "revision": "9ceb3f3dd9dc125dd8ffefcba504d130"
  },
  {
    "url": "assets/js/16.00de5c2e.js",
    "revision": "b6d100c4732574f8aa34999521733ef9"
  },
  {
    "url": "assets/js/17.63c7cdfc.js",
    "revision": "654e9e799049c37c00556010eafde296"
  },
  {
    "url": "assets/js/18.1bc45a4c.js",
    "revision": "709db2cd303df4c747b49c8c01a7a208"
  },
  {
    "url": "assets/js/19.7eb5fbb2.js",
    "revision": "c8ecabbd3526d3381ee71e74a72eb42f"
  },
  {
    "url": "assets/js/2.80236bda.js",
    "revision": "dc202b8882192840d4e388b56c57d064"
  },
  {
    "url": "assets/js/20.8bbf729d.js",
    "revision": "9f843e6c001f54143e69fae178ce08d6"
  },
  {
    "url": "assets/js/3.b7632aa5.js",
    "revision": "51b09ec068110fda4e9c5df8e636e0ba"
  },
  {
    "url": "assets/js/4.f0813d35.js",
    "revision": "78de55b4c154b8b5172a6550bedfc4ff"
  },
  {
    "url": "assets/js/5.db0e7e87.js",
    "revision": "e5eec8cb337f860d86fb042dd7f0a730"
  },
  {
    "url": "assets/js/6.a8e88ffd.js",
    "revision": "90550a0e40c3140711727fcfb57d481f"
  },
  {
    "url": "assets/js/7.63bdaf2c.js",
    "revision": "c18b9dc238c7b2cf94e42212263be426"
  },
  {
    "url": "assets/js/8.f183f8aa.js",
    "revision": "80f61b772e97c08d5826b443fa3b574f"
  },
  {
    "url": "assets/js/9.3f5d5838.js",
    "revision": "abc8e9901f3b05e1748910335179b162"
  },
  {
    "url": "assets/js/app.9c156694.js",
    "revision": "80da12b734fea71ffd5a88d1420ddb04"
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
    "revision": "4707659d3a4be07d70c7f8c14628e46e"
  },
  {
    "url": "yuedu/index.html",
    "revision": "3e7cfdf9b331b8ed107c9d1e21db6d55"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "a8fc7a3f2d5d567b688f00e7f1f01043"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "874646287336e3e9b5975ea450c0c6d9"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "5df3abc0c970fa29ca2337d85095651a"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "0b9fe025d645a3291f41c4af08ed4011"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "92e6af180aebed49e607243d290b5792"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "e44689220d6042f29a5ef8e5b7dced59"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "d2d0613e1286825e9aedb38fac7cd3c8"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "d1d88854c161679acb44fa7cd2827245"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "540b928ff8175faf165813ae8a67b966"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "c4de219711d5fea898651613a6627a53"
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
