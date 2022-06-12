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
    "revision": "1ab07339560ec047f10c3fa5765e4d5f"
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
    "url": "assets/js/10.4e2ba327.js",
    "revision": "b42c48275ab2eb0cb8b7e94a8ca5aa9e"
  },
  {
    "url": "assets/js/11.11c5c6a5.js",
    "revision": "6f9aa472e3799a4e895b8cef686af1c2"
  },
  {
    "url": "assets/js/12.be6deb36.js",
    "revision": "9e52822d59d292d3a1b994de2f199791"
  },
  {
    "url": "assets/js/13.c5eb7678.js",
    "revision": "c2900dab58777b1a8e9cb08fc2c753e7"
  },
  {
    "url": "assets/js/14.35eaf1af.js",
    "revision": "31e4c9ea71e5d8c1c192588c046a6eda"
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
    "url": "assets/js/17.f971274e.js",
    "revision": "f0d5e37c2173cbaf1be92a0c7fd8d6ad"
  },
  {
    "url": "assets/js/18.5515d32e.js",
    "revision": "10faa26a49e4422f09d756d37274abff"
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
    "url": "assets/js/app.491f34b5.js",
    "revision": "ea6ccf95a8b9103e808230d0463423e9"
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
    "revision": "caacad7df2047cde978bbbfd5f8964e5"
  },
  {
    "url": "yuedu/index.html",
    "revision": "56c2ce33700dc7842027afabdbdb8f7f"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "5be6138f183423ea9ff38e89e5fb5679"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "cfb8933f5f2e5c7d265fd3bc80de0549"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "c1c4a7afcc5a44b4ae39c9428e1f4c6b"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "37c9aa6581b14ab814145000936b7dcc"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "77a880db274bc3e3c947c4c8c9cc5bff"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "710da2410dbf4c2700934eaa9185e0ef"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "c7bb277a53e27c7b6627ed8c87673cdd"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "eb75adb22eed14b1a4fd5e66e7a74372"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "631c63dc2da8c77f00b620c02b4b5747"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "8496281534bf18d9d2cb1ea05a17f663"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "423e63971224fb79019e5df63760c5fc"
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
