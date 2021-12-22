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
    "revision": "ba8416bd7ef373746850d8b7d445bb9b"
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
    "url": "assets/js/10.14a67b88.js",
    "revision": "9c049902430c91130720bb514eac2e55"
  },
  {
    "url": "assets/js/11.dad89d99.js",
    "revision": "67631b114b4cfe58bff02dbd83982e2d"
  },
  {
    "url": "assets/js/12.d647ebbc.js",
    "revision": "e3d0e135340dbdf8485587e90d69ef55"
  },
  {
    "url": "assets/js/13.6a03e82b.js",
    "revision": "4dd5f38ac173f7c0e6110a651e2978fc"
  },
  {
    "url": "assets/js/14.697b3506.js",
    "revision": "4bbe7d76650d18a5bf766f76842cf793"
  },
  {
    "url": "assets/js/15.5e19be78.js",
    "revision": "5ff4d65c3fb68d5a54d2b3104c476601"
  },
  {
    "url": "assets/js/16.19011ef9.js",
    "revision": "55609cffa67f007b4479816f609dc1e6"
  },
  {
    "url": "assets/js/17.cf0253d9.js",
    "revision": "86b8d663782d6b5b487d231a3c14861b"
  },
  {
    "url": "assets/js/18.5260b0f5.js",
    "revision": "cb3d5efcb3aa61549424a7fc5726a8e2"
  },
  {
    "url": "assets/js/19.77705240.js",
    "revision": "b2bf282f3c22470cd16ce5b4d5f6a327"
  },
  {
    "url": "assets/js/2.d7d968aa.js",
    "revision": "c90f003566d9d66f0165a1f542ecd4c8"
  },
  {
    "url": "assets/js/3.ad344700.js",
    "revision": "a85671b7d436f9b7abff49bfb0e69e82"
  },
  {
    "url": "assets/js/4.66bb69b0.js",
    "revision": "1e01314570942411a755b5517c0bdfb0"
  },
  {
    "url": "assets/js/5.b4096efd.js",
    "revision": "5eaa8153764d0241a9e05e9f0da6181b"
  },
  {
    "url": "assets/js/6.6e797c9e.js",
    "revision": "26abb63de436c761b171b6d082b1aabf"
  },
  {
    "url": "assets/js/7.eaa91d31.js",
    "revision": "63d62c298d9129affe14e970a8edec33"
  },
  {
    "url": "assets/js/8.1d802ae1.js",
    "revision": "292774b7fdc60959b823296df3fe320d"
  },
  {
    "url": "assets/js/9.f1d9b3a6.js",
    "revision": "951d7c8343501433d29f8d6bd25539e5"
  },
  {
    "url": "assets/js/app.a6315a37.js",
    "revision": "d75447f380b9ed2905295b891c9959dc"
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
    "revision": "be7e29833e39f8ce420b00bea928e645"
  },
  {
    "url": "yuedu/index.html",
    "revision": "52a7de3df829c1430b717caf30c8b8a9"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "06aab16cb3e6fba37e49308038ea92d7"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "22f97ebc615e3356e6141706129855da"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "0a8b88686e30694e8a5d6c4723a4708b"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "60d11d19ba29ef37702779fe32cb40c5"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "51652e78aac722bd7435dfd82d1c255a"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "56b535ed7c06b78469020c3deb5f1efe"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "afe33b319d179f937f61f7e966b2cfd3"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "abd5acc9e3ebc00db2bc80538371c963"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "c16d8c16096611bb97bdd4cfb7d738ed"
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
