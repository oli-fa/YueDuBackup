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
    "revision": "c75ad4e354df0446887903a7cdac7a11"
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
    "url": "assets/js/10.701a74d2.js",
    "revision": "0825d14085751b3b745ea2ddd90df88a"
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
    "url": "assets/js/14.de5a2a81.js",
    "revision": "ed9c85d41b103496f84fec48f25e8279"
  },
  {
    "url": "assets/js/15.6637c526.js",
    "revision": "801a7f768a6e6923960d4f14beec2c86"
  },
  {
    "url": "assets/js/16.7ab04851.js",
    "revision": "2e257b566311d7a25ea20147aef079bf"
  },
  {
    "url": "assets/js/17.e3bb1626.js",
    "revision": "45333eb88b98e43832f6bea2ac498c4f"
  },
  {
    "url": "assets/js/18.1e444edd.js",
    "revision": "53d0c5e218a96b7cfb8e1867c6a3d538"
  },
  {
    "url": "assets/js/19.77244e7b.js",
    "revision": "efda7de663dd97b39f33a2ca62d5334a"
  },
  {
    "url": "assets/js/2.0322bf02.js",
    "revision": "4dae301a721f6c258af3b0d5227bf2eb"
  },
  {
    "url": "assets/js/20.665ac7d4.js",
    "revision": "2ae503d4db1634a24dd30ad09fec646c"
  },
  {
    "url": "assets/js/3.4d433c17.js",
    "revision": "ee0c1ef91430e8f5c4dce7627106622c"
  },
  {
    "url": "assets/js/4.527a6978.js",
    "revision": "f67b5b7a1ef31423c418de29ac74527e"
  },
  {
    "url": "assets/js/5.db92a3e8.js",
    "revision": "2926b11f62946b8cbaeee13043f26c5e"
  },
  {
    "url": "assets/js/6.a8d8c6ff.js",
    "revision": "c7cd28547414674c44b66d5be63cb9fd"
  },
  {
    "url": "assets/js/7.11520600.js",
    "revision": "6f95fdd55826645fca36f8286b6f141f"
  },
  {
    "url": "assets/js/8.ce09dd44.js",
    "revision": "3f407bbde917009075d5d049a66581d7"
  },
  {
    "url": "assets/js/9.f89b5910.js",
    "revision": "d600432e0e898e1d52baba833411d249"
  },
  {
    "url": "assets/js/app.7e7f08ce.js",
    "revision": "9167aa0345cecca1e733dc302106fa32"
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
    "revision": "aeffa61328133f02736251fc0c2c45f4"
  },
  {
    "url": "yuedu/index.html",
    "revision": "f301ebe79150721894c90f822760c49b"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "605ef466cc6276613a88d666af6ff726"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "0a719b85f83ebf47d6951ac817d78cb7"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "203443bdeb3ae6d2e7964e5d8dd06d4a"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "f34bf3a5d0e9b7c958d0d6f4eed87be9"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "832fe48ea4c08d4b036dd6b5ab888838"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "3db4f0806844cbafe814f30e121762b8"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "f975d93c759d34c53e54c95c1da43233"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "bbb6b211dec37103411d756cbf2b5460"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "82bb096d257997cb1749c58c553a8498"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "6786ff63216ea6aec3d3bda3eed3378e"
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
