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
    "revision": "78f4b1543f9def547321bacd378a46f6"
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
    "url": "assets/js/11.524d87a9.js",
    "revision": "3f3d957d138f4a6dd63cbe13630dd060"
  },
  {
    "url": "assets/js/12.73ce7a3e.js",
    "revision": "93308611b80024f4ff6d671e5abd5615"
  },
  {
    "url": "assets/js/13.34116341.js",
    "revision": "08ac9918996d2f579d09d85f5368202e"
  },
  {
    "url": "assets/js/14.440a39db.js",
    "revision": "43fab1b695a4bd9345df3e0a420953d6"
  },
  {
    "url": "assets/js/15.fbd447a4.js",
    "revision": "e795a2ee9ee8b06e71efdc56c8852d1d"
  },
  {
    "url": "assets/js/16.c895da74.js",
    "revision": "23f93bdd662280f3ba6217ed1bce522d"
  },
  {
    "url": "assets/js/17.912ff0af.js",
    "revision": "ec8c165fd7388f65f07f80de27f7cd86"
  },
  {
    "url": "assets/js/18.d47c0e60.js",
    "revision": "960ba8fc1dcc30fa532e9eb347e73c0a"
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
    "url": "assets/js/app.07336c38.js",
    "revision": "8361fb5d25db1c0ef1d9ef900bf368ab"
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
    "revision": "c9fe82bc372b7557a63826386330c4b3"
  },
  {
    "url": "yuedu/index.html",
    "revision": "35282f267238f6e11c93431ba2808e2b"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "b21e7ee31fc4bf9284b6b08253f23a1f"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "5379ea20325e43807bdd1cf275b56714"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "222e34d2b7e460e33f8b5cc633c68976"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "06ff0c86917a474a3f330abb2096ff74"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "f8d2ee07ae7dfa5dfc0d6d2217119932"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "e05059f9e5ef9efefef68976d0ae86e1"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "d5de63bb167818a85a3797958af55926"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "ded048e21e3a14770209cc9e27ef3dd7"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "94400c55d990cd32d971417d3b881ffa"
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
