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
    "revision": "56ff21b2b28602c188e6fcc1c9c4386f"
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
    "url": "assets/js/10.30db1f0f.js",
    "revision": "3d3a10695e88dfe1f9377f2b4f581910"
  },
  {
    "url": "assets/js/11.c9391734.js",
    "revision": "459c680156f8ff912de9a1ba69ee53fc"
  },
  {
    "url": "assets/js/12.571adacd.js",
    "revision": "1939ef3beeea8ecd07258e3d478b4be9"
  },
  {
    "url": "assets/js/13.f8ed75e7.js",
    "revision": "9873ee1a47d70ee50e6a8b4e2ef2fc74"
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
    "url": "assets/js/16.17ecb0d9.js",
    "revision": "a14c602d3b2001c84bbd3b0aa3a8c3cc"
  },
  {
    "url": "assets/js/17.cff7f54b.js",
    "revision": "a1226d9e10c4af48077010e69383e8ba"
  },
  {
    "url": "assets/js/18.9b2f6855.js",
    "revision": "958340c2d031d14514f926b3b70ae0cc"
  },
  {
    "url": "assets/js/19.2ce9ebdc.js",
    "revision": "3ff3ba190fe6b5fcc173de57f7a18a70"
  },
  {
    "url": "assets/js/2.0322bf02.js",
    "revision": "4dae301a721f6c258af3b0d5227bf2eb"
  },
  {
    "url": "assets/js/20.3222980c.js",
    "revision": "02032743c7db8015024152262b48200f"
  },
  {
    "url": "assets/js/21.6c3b8d69.js",
    "revision": "8b8edfb61299afa4aa4e1b7c85ccb798"
  },
  {
    "url": "assets/js/3.4d433c17.js",
    "revision": "ee0c1ef91430e8f5c4dce7627106622c"
  },
  {
    "url": "assets/js/4.db8a37c1.js",
    "revision": "1109ff6260443060420ac231f85387c8"
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
    "url": "assets/js/app.103e7e1b.js",
    "revision": "30d7c4be20b42fc56f0217a94d9ea1ba"
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
    "revision": "3d126b94fe65a747273caeba53ccd345"
  },
  {
    "url": "yuedu/index.html",
    "revision": "b9a398df00203e74b7fab98edb9ae64d"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "13c9e74c13f9d4535ebde3cb306dda6b"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "0bb7968bf86a0d4c01eeacab55f9c987"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "5d72e922405ea1b1e6fdaa6225c2c89b"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "6e4071f1819163798a2413eb689d5056"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "1aeb9abbfab3f91c73f6b4f2811687df"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "fa6449a709976424f87d410934290011"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "115e746bf74b85109de9d097ab070931"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "446ca25a4bbaae1a943dbfe1d5dcfd50"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "8c3b803c0f2c9eec6399474812edf1ea"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "013f650ecdca023a8e28faea987103d7"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "b30d6fea886c7439765b263ad8ec78ab"
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
