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
    "revision": "2ae30f1efbb8bfb441b8fe859de3ec80"
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
    "url": "assets/js/10.adf28f6f.js",
    "revision": "5e4c2f712b75548421ec39922286f42d"
  },
  {
    "url": "assets/js/11.0834044c.js",
    "revision": "19f1add9a77c5a9cfcb95c51bb2c9762"
  },
  {
    "url": "assets/js/12.6d431d21.js",
    "revision": "f8ebc720a8ba8cc687392671accffbf7"
  },
  {
    "url": "assets/js/13.0e4453eb.js",
    "revision": "90078894a15d5ce423e3227600866858"
  },
  {
    "url": "assets/js/14.8a99a568.js",
    "revision": "58c6234f3305ed8d80c83fbef1688e76"
  },
  {
    "url": "assets/js/15.0137a106.js",
    "revision": "d9d69c01139fd95a799a7fd69ede2432"
  },
  {
    "url": "assets/js/16.156ed21d.js",
    "revision": "ba9a34282e5b1d0c8a112f018268919f"
  },
  {
    "url": "assets/js/17.177f169c.js",
    "revision": "334849c77b92f413ad5d4e787a31347a"
  },
  {
    "url": "assets/js/18.aacf801b.js",
    "revision": "548d21a8f3121eaac5d7413d30796595"
  },
  {
    "url": "assets/js/19.77705240.js",
    "revision": "b2bf282f3c22470cd16ce5b4d5f6a327"
  },
  {
    "url": "assets/js/2.d7d968aa.js",
    "revision": "c90f003566d9d66f0165a1f542ecd4c8"
  },
  {
    "url": "assets/js/3.ad344700.js",
    "revision": "a85671b7d436f9b7abff49bfb0e69e82"
  },
  {
    "url": "assets/js/4.66bb69b0.js",
    "revision": "1e01314570942411a755b5517c0bdfb0"
  },
  {
    "url": "assets/js/5.b4096efd.js",
    "revision": "5eaa8153764d0241a9e05e9f0da6181b"
  },
  {
    "url": "assets/js/6.6e797c9e.js",
    "revision": "26abb63de436c761b171b6d082b1aabf"
  },
  {
    "url": "assets/js/7.eaa91d31.js",
    "revision": "63d62c298d9129affe14e970a8edec33"
  },
  {
    "url": "assets/js/8.1d802ae1.js",
    "revision": "292774b7fdc60959b823296df3fe320d"
  },
  {
    "url": "assets/js/9.f1d9b3a6.js",
    "revision": "951d7c8343501433d29f8d6bd25539e5"
  },
  {
    "url": "assets/js/app.75f7238c.js",
    "revision": "a206b5041f74b4a8075ae2577d60b3ff"
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
    "revision": "eb156e5782f9505a7f217812e6b9c42a"
  },
  {
    "url": "yuedu/index.html",
    "revision": "6f3e307e47164b6f1ab5630caca09f02"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "480803a29f399ad05b714c729768d3d3"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "3d53eca085cee58340fe63c6c01edfec"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "be6227b918f95434e3cf4973cf0c03d6"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "4e47fca111d5bda3260faa18e1e6e002"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "7400662f2b56d539c703faa6f788238b"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "f0569469256b230ca3abe474880a7842"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "ff6e26f59a852d7e83ced6f697650f8e"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "299dbc073f693b96309fc252a6024552"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "cc93225754e07d565d1aac87f1186c78"
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
