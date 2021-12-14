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
    "revision": "a9d4e06b20f5f9ea2d791a57748fb88a"
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
    "url": "assets/js/10.93654786.js",
    "revision": "fcd0013b1971b76ebc6857d5b05e750b"
  },
  {
    "url": "assets/js/11.11ccf4d9.js",
    "revision": "1d2493f346e243e62a7f8a75c12f8dfb"
  },
  {
    "url": "assets/js/12.5411dc1b.js",
    "revision": "6cc43aa753004be962e96dcaf7a06e3f"
  },
  {
    "url": "assets/js/13.16d4469e.js",
    "revision": "973249270c5ae8d2cbe81234a47abbea"
  },
  {
    "url": "assets/js/14.14b77112.js",
    "revision": "c3d4773e19ef030daa0e590c5b4b3fe3"
  },
  {
    "url": "assets/js/15.ea3bd3e3.js",
    "revision": "b07f5ce7431f9644ed0bcaa0570da186"
  },
  {
    "url": "assets/js/16.133681d0.js",
    "revision": "21d7bf29deecef4a1a8db883a6308de3"
  },
  {
    "url": "assets/js/17.5c30189b.js",
    "revision": "9f4337db4bacf108d7ba5b71b69f8246"
  },
  {
    "url": "assets/js/18.565ee184.js",
    "revision": "115580aaba3a2ca947198367d7f8158e"
  },
  {
    "url": "assets/js/2.0e2682b8.js",
    "revision": "50fb15d1470e504c352122acb1cf5bbf"
  },
  {
    "url": "assets/js/3.008297d5.js",
    "revision": "e006111b45c0623a10b0fb2544032e52"
  },
  {
    "url": "assets/js/4.780bdf29.js",
    "revision": "58c1be510bc65c08d6f410640349a32f"
  },
  {
    "url": "assets/js/5.5da1ce14.js",
    "revision": "c463bd4c5716225ff6a68224c2813a79"
  },
  {
    "url": "assets/js/6.e5a1401d.js",
    "revision": "755253c82349fd3378e926a6c75dfafa"
  },
  {
    "url": "assets/js/7.189a9b1c.js",
    "revision": "2294b622e4b8d97d76a4a3bcc51d6dea"
  },
  {
    "url": "assets/js/8.05310562.js",
    "revision": "0b5ddf2a34e1fd952220901964819b27"
  },
  {
    "url": "assets/js/9.6a61af4a.js",
    "revision": "233e460548368a351ed1aecf11d23cb4"
  },
  {
    "url": "assets/js/app.c3948afc.js",
    "revision": "e988cf8fabaa0cbddb73e5e1ba8cd387"
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
    "revision": "440fc43c6d402c7fd17f1d4f61a79374"
  },
  {
    "url": "yuedu/index.html",
    "revision": "2120e75cd149bfe6127a94c002e798f1"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "f106baf7e44872016f5a61526df6ee9b"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "80b1034e0583d3e0dc66768163642f96"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "8929a76a42b3cc389df72eaa830d89af"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "7b4f4c9fd5e47a2410ba2a1522b703d0"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "cdf537028055306cfa21c454711be2f9"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "2643f0a59513ad305fa57e2f55138f9a"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "81c05958bf9d0ce5ce8e23e01179a73f"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "3c3b2969a4300d589bca1d7cfbb09e60"
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
