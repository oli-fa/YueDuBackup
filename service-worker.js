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
    "revision": "bd91513b124c7369464b5062668e1d84"
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
    "url": "assets/js/10.9bf88e7c.js",
    "revision": "755a49d4d2440edc9ce0cb5ed587f9ea"
  },
  {
    "url": "assets/js/11.5183d5d4.js",
    "revision": "81409c7aa588a3715b92a84cb2ec130f"
  },
  {
    "url": "assets/js/12.0b1c057f.js",
    "revision": "8633516253de2b622b24a96efb7b5ced"
  },
  {
    "url": "assets/js/13.09ddaa1b.js",
    "revision": "96f22076398023c3ca3cf387e36cabc3"
  },
  {
    "url": "assets/js/14.d6edb9df.js",
    "revision": "81fd75e4f70cdad1950c2620733b27fe"
  },
  {
    "url": "assets/js/15.43ea108e.js",
    "revision": "afe9053c2148aa35fff95231f161e3dc"
  },
  {
    "url": "assets/js/16.fec4f0be.js",
    "revision": "d98b2d620553387bfdd48cdacb2df838"
  },
  {
    "url": "assets/js/17.0249034f.js",
    "revision": "00fd174c565357f11b4307af864c4597"
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
    "url": "assets/js/8.84987dcf.js",
    "revision": "afa064285621a55a69aa5f2e61602096"
  },
  {
    "url": "assets/js/9.81d6e54f.js",
    "revision": "6fd9ddf3b566631064b50f222ab4855d"
  },
  {
    "url": "assets/js/app.1ac69aa0.js",
    "revision": "2756004266cc989a47e30a2ae0eb88e5"
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
    "revision": "ffcf6b9f6e8db8583a1c9595c22bf7aa"
  },
  {
    "url": "yuedu/index.html",
    "revision": "4019355d00ae4616b3f0cce3062ad57a"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "45702918ff5df78d738282080c9d9d28"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "1bcbc115c3865a3dfbd7a702c407df44"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "2b41ddb7aa636914fa7112843b743325"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "df0680cecff3a8f888d4f39504991c97"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "9bfc07fe7212c061d16924235ca03d74"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "4861dfba31a42cd5470c4715a37dcfb2"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "c491bb39f8b4a0676a1253a15ea82743"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "2d0fb7b879c57d72c0f774039bde3c09"
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
