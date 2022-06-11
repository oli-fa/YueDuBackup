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
    "revision": "c5207f9f6e73771765ed2b9f057aa467"
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
    "url": "assets/js/10.059be17f.js",
    "revision": "2cbd5109bc949045d8036db4d29ee44e"
  },
  {
    "url": "assets/js/11.11c5c6a5.js",
    "revision": "6f9aa472e3799a4e895b8cef686af1c2"
  },
  {
    "url": "assets/js/12.b6e058c1.js",
    "revision": "6e8033a0339a809f00af6e95af6d8551"
  },
  {
    "url": "assets/js/13.d197b8ff.js",
    "revision": "5707637a4ed6641848b4cc40a23e6892"
  },
  {
    "url": "assets/js/14.134f5ac8.js",
    "revision": "5b4da950120fb01027942d547054bc89"
  },
  {
    "url": "assets/js/15.70f7c32e.js",
    "revision": "3692b75b156139905b30d56b41024f24"
  },
  {
    "url": "assets/js/16.d8fe2e4c.js",
    "revision": "1be20c3b66918ded922e0e7db91775d0"
  },
  {
    "url": "assets/js/17.cf03baff.js",
    "revision": "24d7a87ec0e156979c6ff689cc998d3f"
  },
  {
    "url": "assets/js/18.525d856b.js",
    "revision": "d8ef19d542d2e20cc827b9fa8a818daa"
  },
  {
    "url": "assets/js/19.7261c33c.js",
    "revision": "ac6902c180ea92c3cf35ab5302e945e1"
  },
  {
    "url": "assets/js/2.4deafdc8.js",
    "revision": "124d8834ef54edd3d1475004d6bc1be6"
  },
  {
    "url": "assets/js/20.d77b8989.js",
    "revision": "5970f38b9b96e0c4c1d89cf7bfc63a4b"
  },
  {
    "url": "assets/js/21.5e91efc9.js",
    "revision": "f5ec93d7ec150d1fda7995f97a852412"
  },
  {
    "url": "assets/js/3.7081f29d.js",
    "revision": "525746f67ef4be89ca51db627ff2db3a"
  },
  {
    "url": "assets/js/4.5332e8f0.js",
    "revision": "6bf8fc974879175370a38c80116a8f6d"
  },
  {
    "url": "assets/js/5.dc495e7e.js",
    "revision": "57b4c3be9210c0777eaeb4cc713429f7"
  },
  {
    "url": "assets/js/6.3ac9b44b.js",
    "revision": "b00b3d11d6e41fc603dbeb13e557b963"
  },
  {
    "url": "assets/js/7.2aeaf9e7.js",
    "revision": "e343f1dbaf568fc87e8151393c382753"
  },
  {
    "url": "assets/js/8.269e643d.js",
    "revision": "453b9cc544b179d6955c52bd1548c76c"
  },
  {
    "url": "assets/js/9.916485e0.js",
    "revision": "3f8e7eca7d3888f15f4247a80fe64475"
  },
  {
    "url": "assets/js/app.8b7e15fa.js",
    "revision": "cd37401d8b42d783f67a1eacecd400ae"
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
    "revision": "970f103a954b1ed55ab8d7ed1b9006b1"
  },
  {
    "url": "yuedu/index.html",
    "revision": "9896a6bc5573e0dfa16e05131c25c1c1"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "8fe8cc0b15283c6adb9ceac111a38155"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "5e4155e8a2829f459a0dd830edde110e"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "0965c9dedf4dde4e5440a41826cf9f6a"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "8561020490ff852197c0fe522abd285b"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "11980e7568de10a0faa194a3692b72b3"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "38b55b6412adeed41b3bf1a96ada11a0"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "6a5b62d4fea0b2f0f93c2d2ca7b83c23"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "4f260cfb5f3cf3364cbae7c177815157"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "d21c7018956d1521798b73397f5c65ab"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "aca86095e8d2ca79a006eed708ee6b3d"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "d87bf0b57c6088334b904494bfacc1b5"
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
