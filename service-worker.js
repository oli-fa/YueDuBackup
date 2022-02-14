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
    "revision": "58bcf243cbd16bfd8df744ce44133577"
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
    "url": "assets/js/10.30db1f0f.js",
    "revision": "3d3a10695e88dfe1f9377f2b4f581910"
  },
  {
    "url": "assets/js/11.8a03d03c.js",
    "revision": "250256a4a892ade9760969b4e7275cce"
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
    "url": "assets/js/15.6637c526.js",
    "revision": "801a7f768a6e6923960d4f14beec2c86"
  },
  {
    "url": "assets/js/16.94530c09.js",
    "revision": "7ca44a62db71c5b7fed356051ddfd26b"
  },
  {
    "url": "assets/js/17.cff7f54b.js",
    "revision": "a1226d9e10c4af48077010e69383e8ba"
  },
  {
    "url": "assets/js/18.9b2f6855.js",
    "revision": "958340c2d031d14514f926b3b70ae0cc"
  },
  {
    "url": "assets/js/19.7203c21c.js",
    "revision": "716737fbb628c996d3490bfa24d7a2e8"
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
    "url": "assets/js/8.ce09dd44.js",
    "revision": "3f407bbde917009075d5d049a66581d7"
  },
  {
    "url": "assets/js/9.f89b5910.js",
    "revision": "d600432e0e898e1d52baba833411d249"
  },
  {
    "url": "assets/js/app.aac77f44.js",
    "revision": "3f80d6d1b104c15dc625528347153b6a"
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
    "revision": "9e3f6e573eb37111f6d1594feee5fbf2"
  },
  {
    "url": "yuedu/index.html",
    "revision": "e760dafb2274b992f3add84a46dad5c4"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "bba05ce5ac64305d208f3b9637ecac48"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "908544fbacb3d7c3e07422ad438315e9"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "b4e07b0837358ae61051c136b8807466"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "17ef7e2c7c0420e9ff9f8bb3c697f9ad"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "b033093e049cc562c2bc4cbc1cdcf238"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "0c6db271bdaaaa45f1c4f15c4b6e287c"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "15e0de03a2da1e42250ec0009ce87e73"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "83061ae3d333c81ba63fa87b2b786932"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "ce3a01c93d64b3ecb0537f89053afa61"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "8af3c8e767579dcd051c8f56d28f077e"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "2205ae16300ee3e091fe079e35754758"
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
