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
    "revision": "10a7a6844b5382cc90d544398a684220"
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
    "url": "assets/js/10.81943be2.js",
    "revision": "b82fd947a16c1ac5b0ea5c1444f400e2"
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
    "url": "assets/js/16.8371b294.js",
    "revision": "7daee303d1f79c161e9d3cc9b7edec15"
  },
  {
    "url": "assets/js/17.2a98697d.js",
    "revision": "8fb811e3e64487c9c48d26b21c1ba76c"
  },
  {
    "url": "assets/js/18.9b2f6855.js",
    "revision": "958340c2d031d14514f926b3b70ae0cc"
  },
  {
    "url": "assets/js/19.1aed6613.js",
    "revision": "36eeee7563d97501563acf531888ce2c"
  },
  {
    "url": "assets/js/2.0322bf02.js",
    "revision": "4dae301a721f6c258af3b0d5227bf2eb"
  },
  {
    "url": "assets/js/20.3222980c.js",
    "revision": "02032743c7db8015024152262b48200f"
  },
  {
    "url": "assets/js/21.6c3b8d69.js",
    "revision": "8b8edfb61299afa4aa4e1b7c85ccb798"
  },
  {
    "url": "assets/js/3.4d433c17.js",
    "revision": "ee0c1ef91430e8f5c4dce7627106622c"
  },
  {
    "url": "assets/js/4.db8a37c1.js",
    "revision": "1109ff6260443060420ac231f85387c8"
  },
  {
    "url": "assets/js/5.db92a3e8.js",
    "revision": "2926b11f62946b8cbaeee13043f26c5e"
  },
  {
    "url": "assets/js/6.a8d8c6ff.js",
    "revision": "c7cd28547414674c44b66d5be63cb9fd"
  },
  {
    "url": "assets/js/7.11520600.js",
    "revision": "6f95fdd55826645fca36f8286b6f141f"
  },
  {
    "url": "assets/js/8.d1fbddd1.js",
    "revision": "1b5764aa48d2b28e463e643a524a9aaa"
  },
  {
    "url": "assets/js/9.f89b5910.js",
    "revision": "d600432e0e898e1d52baba833411d249"
  },
  {
    "url": "assets/js/app.f33015bd.js",
    "revision": "7ec5307292f6ad1daedef8d38c7ea600"
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
    "revision": "0ec201960b7d4e8631b5410e53b18f06"
  },
  {
    "url": "yuedu/index.html",
    "revision": "cb061d41e6ef57103b271379cfaa0a2c"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "b1395703f1f283bbc058668458229ce0"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "e763e09d52caaa1f5c7abac180bf904f"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "b127a4b702e4aaea2e03858c4631ca2e"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "6fc0890f916fb377c2061df9d6b4ad1e"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "061de8c7f821866a859166f821fbeddc"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "dee907903aa102c11ca033a71e71b23f"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "9d3bf09a0cfc544bcd18879aad047318"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "c1f02a258b0877624e9e5e7449473e08"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "f5f56e115cbad1db754d5e3868f8b03a"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "1a98bc7fb41515d0bf29388a5fe630ba"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "af0b8d4fcd387ff846a9312016b9a169"
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
