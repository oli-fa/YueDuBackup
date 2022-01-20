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
    "revision": "238c68cd56b0609730db6e7e93ca8218"
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
    "url": "assets/js/10.e1bf6c51.js",
    "revision": "b17d5f4eb5ffaa2506ce7ef4e8bb69f7"
  },
  {
    "url": "assets/js/11.2e57207a.js",
    "revision": "1c50abbdcf2dc0d31f42cab9769c9587"
  },
  {
    "url": "assets/js/12.1a34c860.js",
    "revision": "e4f2c955e9310bc66041ff8307b4c349"
  },
  {
    "url": "assets/js/13.9bef7e3d.js",
    "revision": "db9ef0e03a408cb174288579f8483b52"
  },
  {
    "url": "assets/js/14.c41b7d54.js",
    "revision": "b27b4d60e8936fcbad211216fc220795"
  },
  {
    "url": "assets/js/15.64f9fde7.js",
    "revision": "aa20f165d454912236705168e042bf1c"
  },
  {
    "url": "assets/js/16.859b12a0.js",
    "revision": "3d430af1c2e757b160689fefe665d868"
  },
  {
    "url": "assets/js/17.47b79bda.js",
    "revision": "6a012fc6f1b8472cb975229e1e48f167"
  },
  {
    "url": "assets/js/18.0c586449.js",
    "revision": "bd374afc28b0587f8b3c9eaad3165cf4"
  },
  {
    "url": "assets/js/19.1dca8841.js",
    "revision": "acf7355f3f82bb11105d736f50b7a8aa"
  },
  {
    "url": "assets/js/2.80236bda.js",
    "revision": "dc202b8882192840d4e388b56c57d064"
  },
  {
    "url": "assets/js/3.b7632aa5.js",
    "revision": "51b09ec068110fda4e9c5df8e636e0ba"
  },
  {
    "url": "assets/js/4.0007a1f5.js",
    "revision": "4443dd9da065bf739b110b6ecd91d596"
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
    "url": "assets/js/app.b71c4382.js",
    "revision": "9eb7b690934d4fdf837e5873e355604c"
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
    "revision": "f9d6fc0b675940b025bd1982a30255e7"
  },
  {
    "url": "yuedu/index.html",
    "revision": "638fbe75ca753f7d936cb12f43167c7f"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "0e17c7e15ede0de2fbbcd81fe06b0dfd"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "b73613ba6198e5c9359d532edc36507d"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "1510a141a9ba2bbc0f47a3702ed5c160"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "e90222a465b8461cf68cb388c1da7c31"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "352d716b6b26ad86061df7dfed2293b3"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "d1626992a8419bca3030d5a084abcabd"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "5dce7549dc16c6a8411f6d430133eef9"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "d7b6c2c67dac0c16c841fe85050ce284"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "eb240f7ec48ff381d10f8b49f3e1771b"
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
