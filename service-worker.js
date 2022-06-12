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
    "revision": "c84bf9bc0910ef774c1bc07954ea6caf"
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
    "url": "assets/js/14.e0f76169.js",
    "revision": "3336e733fe6ecc8686f14420f23d4f64"
  },
  {
    "url": "assets/js/15.b896fb7a.js",
    "revision": "3f58881a033d179a01672cf0e53879cb"
  },
  {
    "url": "assets/js/16.32e93871.js",
    "revision": "aff6fafc36934fa6fea7323ac89e4df0"
  },
  {
    "url": "assets/js/17.43041c2c.js",
    "revision": "0714d502dd2de48d945604b87b2e9748"
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
    "url": "assets/js/app.08302c6e.js",
    "revision": "b8d6ac06d8546e1b62c51e35b6be2704"
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
    "revision": "0b78e49b3bb0a7f6c5e60ebcd6c66247"
  },
  {
    "url": "yuedu/index.html",
    "revision": "5ae24b33cbe4c9fc8c7d55f6faf393c0"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "c74d108d96a4f508351e431eadfa93f6"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "7e59602744f4a2531979e1f4ee0d098b"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "21148cec3d74c48cdced1125e9d2eb54"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "ff543f8a75aa309de60ef9080b7c8210"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "2bde62ca629405c55707097bf21a4cec"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "e3d5cca1f751c224b64876e7fa338c9c"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "9e9b6944fb92f84399f60be097e25d2c"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "88a26eda6215f682aa9b2d3ea0923e19"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "ba1b3aa785c882464037fd9e812486ee"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "41034a8fee7f3aebb7f949a5bb748253"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "8b0635002c2ab60eee000dacd83838bf"
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
