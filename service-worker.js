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
    "revision": "13b77ac91717f011d3a4fbdd64d58cbd"
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
    "url": "assets/js/10.3cacca95.js",
    "revision": "2940cd6ae004fb12db0e56977f59ebea"
  },
  {
    "url": "assets/js/11.3102c4ae.js",
    "revision": "becdb681d15089816e32cdbd36ac6df6"
  },
  {
    "url": "assets/js/12.f1e3ece6.js",
    "revision": "7000dd2cfba6bd661223a2c51cafe886"
  },
  {
    "url": "assets/js/13.ceaab184.js",
    "revision": "612656f2216f3d6dc9ee5e71b443f49b"
  },
  {
    "url": "assets/js/14.86b971ce.js",
    "revision": "0a2ad0b269f93a8553b520b358cc83b5"
  },
  {
    "url": "assets/js/15.006a2db8.js",
    "revision": "9ceb3f3dd9dc125dd8ffefcba504d130"
  },
  {
    "url": "assets/js/16.00de5c2e.js",
    "revision": "b6d100c4732574f8aa34999521733ef9"
  },
  {
    "url": "assets/js/17.63c7cdfc.js",
    "revision": "654e9e799049c37c00556010eafde296"
  },
  {
    "url": "assets/js/18.1bc45a4c.js",
    "revision": "709db2cd303df4c747b49c8c01a7a208"
  },
  {
    "url": "assets/js/19.7eb5fbb2.js",
    "revision": "c8ecabbd3526d3381ee71e74a72eb42f"
  },
  {
    "url": "assets/js/2.80236bda.js",
    "revision": "dc202b8882192840d4e388b56c57d064"
  },
  {
    "url": "assets/js/20.8bbf729d.js",
    "revision": "9f843e6c001f54143e69fae178ce08d6"
  },
  {
    "url": "assets/js/3.b7632aa5.js",
    "revision": "51b09ec068110fda4e9c5df8e636e0ba"
  },
  {
    "url": "assets/js/4.f0813d35.js",
    "revision": "78de55b4c154b8b5172a6550bedfc4ff"
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
    "url": "assets/js/8.8326f4a8.js",
    "revision": "6e57baca030b99223d01917c7278e8b3"
  },
  {
    "url": "assets/js/9.3f5d5838.js",
    "revision": "abc8e9901f3b05e1748910335179b162"
  },
  {
    "url": "assets/js/app.14f8c5e8.js",
    "revision": "f389e065475429fac13aacefdc0070d2"
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
    "revision": "644f89c7ae12f9e6eadc05ff2883dddf"
  },
  {
    "url": "yuedu/index.html",
    "revision": "7c543f364fd8bebc5a9bd67793329d48"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "7148dcc8aa743d93361ce2f7887d1f8c"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "d00b6ccec07943b869bc975b6c893838"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "b277efd55471b105d8c76b81a19b6401"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "cd5d018357b8c9bd698c8c75bcf73c58"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "e56ba455f77071aa25d78fffe40beee5"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "55cce3f1a64862278b69935a9e88219f"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "fe958c810808e2fce6dd387d672cf04e"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "02d178437b4edd3422a17b8680d45875"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "f564ed1aa7e2b5e9f86f0aa21be7983a"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "6eb9a27e16c842895829ae4ef55e51a6"
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
