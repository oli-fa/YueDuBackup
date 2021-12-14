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
    "revision": "2690a08fc014647f3b1475ebb2da8ced"
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
    "url": "assets/js/10.928fbc8b.js",
    "revision": "5708dac8017b85d2f4c360f8c01be530"
  },
  {
    "url": "assets/js/11.11ccf4d9.js",
    "revision": "1d2493f346e243e62a7f8a75c12f8dfb"
  },
  {
    "url": "assets/js/12.4bdbc7e3.js",
    "revision": "7ed590c4f1c9383d8914840e65b2dc20"
  },
  {
    "url": "assets/js/13.7fcee778.js",
    "revision": "e1f1023fac37f2e7b82c63eb790d8063"
  },
  {
    "url": "assets/js/14.caf5ee47.js",
    "revision": "3a3032562adbfb43c604debad070a605"
  },
  {
    "url": "assets/js/15.b22a8e4a.js",
    "revision": "984fcdf34e519dd24796fb9aa4d6a0e2"
  },
  {
    "url": "assets/js/16.f99f926c.js",
    "revision": "4b37845f46cc454e2f41a18882a7ba21"
  },
  {
    "url": "assets/js/17.effb4aa7.js",
    "revision": "aa41487f4db49df1a1e26abb0a4c4a62"
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
    "url": "assets/js/8.48572ff3.js",
    "revision": "08abfa27c1ad7995bac306643ebfdb7a"
  },
  {
    "url": "assets/js/9.e38f52dd.js",
    "revision": "73d339fdc2be4c19399d897ca7b2239e"
  },
  {
    "url": "assets/js/app.ade16661.js",
    "revision": "2d1230ea9b99b809bdfc10d8f994b2e1"
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
    "revision": "21b881ad4470fbe6a2c57703d2dd593f"
  },
  {
    "url": "yuedu/index.html",
    "revision": "57f672dacfe3bbca1da89996ba1fc8c9"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "8491fe703413eecdb88bff645e57ee56"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "0defda6fea4acd8b176ef905c8fd0e36"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "7ea92d2cfa4e22fed612a23db53f076b"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "f43d832fe7658c1cad9bb2013887798d"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "401be26966be5b8626cce811d0ede02f"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "4cc1755a7ae078a2307e3a5a9560fd3e"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "20d109214ce5185be560264fe3608d9b"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "531c345a944b80eec8b5f6fe873966c8"
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
