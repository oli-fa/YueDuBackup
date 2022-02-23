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
    "revision": "841d77615b2027d4876b87dddeab02b2"
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
    "url": "assets/js/13.7176cfe0.js",
    "revision": "61be4fe4de4052c441f33a8179f53b93"
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
    "url": "assets/js/16.975a1e7f.js",
    "revision": "0f99014194030da7a5fc0d63f6224bc4"
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
    "url": "assets/js/app.0e0579e0.js",
    "revision": "d9afac283fef7f1ba7bf9c952b7c74bd"
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
    "revision": "f53bdae5194494ff0628d33fed07b7af"
  },
  {
    "url": "yuedu/index.html",
    "revision": "acc8bc75c2c6293599e02c3b345905a0"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "b7374b2793e828f9f76075261b2dae08"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "1174262f7abb8850944fccacee6ba6e9"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "9fcd4830251d9ca85b0ccebdda29e58a"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "7c00f0b1cfd2f838a0a17dd9110f0b85"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "1520555146d075567919e350992217a0"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "662268ac1767730304cd84a6bdbe9ca3"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "1f78ca0ce1ac0da64158d056ee1579d3"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "05fd07f142567ebc8c9091939ebf087a"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "be00acb90de71f70628a1795c23cd9af"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "703d804c39b6b0326ce8ca06e97f869b"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "59080f350a43a16120dfff85cd4994c2"
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
