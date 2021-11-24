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
    "revision": "62bebf9f816fb1b140630a64a72cce58"
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
    "url": "assets/js/10.1e0d8d11.js",
    "revision": "6eba18b08410c2e59f0af0e1b5afe66f"
  },
  {
    "url": "assets/js/11.a8244074.js",
    "revision": "a652acb4fefdc7b9d33803f7ee443132"
  },
  {
    "url": "assets/js/12.39d2e0d6.js",
    "revision": "ddc04283d81a82f53058a61fe5396ac2"
  },
  {
    "url": "assets/js/13.80c49510.js",
    "revision": "72f38ad27e4bca0c6e6df99ba9ba0a0a"
  },
  {
    "url": "assets/js/14.ee0902f1.js",
    "revision": "b010ac70c666778b219cbe514297c096"
  },
  {
    "url": "assets/js/15.f3ac64af.js",
    "revision": "91559d93eed78a154030e4a6fc6a3778"
  },
  {
    "url": "assets/js/16.10493614.js",
    "revision": "6c9ac6310433e9a4cedad4aaa56b5f99"
  },
  {
    "url": "assets/js/17.ddaa0774.js",
    "revision": "6daa933034f6c161d5602391afb738b5"
  },
  {
    "url": "assets/js/18.2485660e.js",
    "revision": "5de454e6482fe79cbfe07d0406df7d28"
  },
  {
    "url": "assets/js/2.62f7a9a2.js",
    "revision": "6f6a9076ac5a5b801a666b62b5d42519"
  },
  {
    "url": "assets/js/3.320ebf76.js",
    "revision": "ff91346de7d15aaa48cd129161f4839f"
  },
  {
    "url": "assets/js/4.b0e02d94.js",
    "revision": "d04ba6f300a62358f94ab72da837ff4b"
  },
  {
    "url": "assets/js/5.a2c88a06.js",
    "revision": "d15ee52cf5eb96a3340cbca1415d7e48"
  },
  {
    "url": "assets/js/6.973002f5.js",
    "revision": "c01ebb8a071f36b7491354bcc1b1b5e7"
  },
  {
    "url": "assets/js/7.bc6c7be3.js",
    "revision": "8c8e952abd078ce61dd5496f89a171c4"
  },
  {
    "url": "assets/js/8.6314a2a2.js",
    "revision": "8a7806a44cfde376f330328d53544f8e"
  },
  {
    "url": "assets/js/9.96f882c0.js",
    "revision": "9871ae09ee47dc8f96404fda020bd273"
  },
  {
    "url": "assets/js/app.d94371e5.js",
    "revision": "fc505592f185b7eb3259f1ef3de405ba"
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
    "revision": "54b91235df538f9a3282a3981a9752a7"
  },
  {
    "url": "yuedu/index.html",
    "revision": "0f8a9663b3d1eff0c56bb950b29c4be7"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "88540b4b43d12b295f84ef00a18840b3"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "3d3d879ea39dda6f9f1baaa382cae5ba"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "e12539096d6db55353372cbb840026d1"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "e903da74974ccbc88ffe52db9136ac3e"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "185011d897d6be7f99aa307c5b99faea"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "43cb5e6695034eb82ebc108f3e2469cc"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "0478a76968a5efa58fd8b8876fdd4d03"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "90cde6c683882ff3365b8faa4ffda614"
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
