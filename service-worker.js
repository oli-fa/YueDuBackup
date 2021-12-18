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
    "revision": "fb8c973f8326cd5cc290814ac42b7ed2"
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
    "url": "assets/js/10.29414b61.js",
    "revision": "47d695b4c2d1ae157fdd544da952b48b"
  },
  {
    "url": "assets/js/11.30352424.js",
    "revision": "ea31f3cc86b9f3e9d6a925616ef7ac7a"
  },
  {
    "url": "assets/js/12.620ff00d.js",
    "revision": "e13bb263c46771bbf97ac522a8058323"
  },
  {
    "url": "assets/js/13.ce291f2a.js",
    "revision": "880f1cc48ef799e5569a3aa411bba5ef"
  },
  {
    "url": "assets/js/14.c53787b4.js",
    "revision": "4216f41aa2cc4d94a7279dff326ca64d"
  },
  {
    "url": "assets/js/15.0a08d3b2.js",
    "revision": "18ef3a8a58a53da41c69df588fdb0ea7"
  },
  {
    "url": "assets/js/16.de15d81e.js",
    "revision": "9752c573696bd37a79f27bdde9b2d1c0"
  },
  {
    "url": "assets/js/17.b5761e55.js",
    "revision": "280c4f7c004a9d4353f5781d258a6702"
  },
  {
    "url": "assets/js/18.17a7b87a.js",
    "revision": "0f1372240765c9fd16fdce17a134c22e"
  },
  {
    "url": "assets/js/19.eae74c1b.js",
    "revision": "73b6cc29c34c858125acbf9c100ca81b"
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
    "url": "assets/js/4.15b5f3df.js",
    "revision": "d865faaa6e4c63110b31162262ecc79a"
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
    "url": "assets/js/8.001a8a36.js",
    "revision": "f3700a8b789cd6c21aca80d529197193"
  },
  {
    "url": "assets/js/9.ecdb3c1a.js",
    "revision": "23b5ff6cb65dcc785752cefdf714ee2f"
  },
  {
    "url": "assets/js/app.6bda7d0d.js",
    "revision": "77c5c57f9e4d1a223283d9d19d22fc97"
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
    "revision": "3c1945b15940ee12e601762eb1fa7d09"
  },
  {
    "url": "yuedu/index.html",
    "revision": "01620a9ce26f90266f561aad28d90441"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "fd744b05bb600b01cd2d4572fff08f38"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "b23b543fdb7b236cfa672bdbecf26fb1"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "c302daf64f4b00ae5d86698f52d4ac33"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "a272b3eb9d321cf81b9d4bd8be90cb91"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "ba7a9626114c17b578159dfcfa9a9a52"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "52ba6cf6fbc2c728905af2f2509738e6"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "0cd33277b91f0330a22b0736ec8bebfd"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "fbf90fb83ab98eef7c004fcf5bcd81e7"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "09be35156cfec543bfdffae549cc37b8"
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
