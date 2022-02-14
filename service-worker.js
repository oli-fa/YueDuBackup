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
    "revision": "88ea73fde8097427bf590223fa9c6edc"
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
    "url": "assets/js/10.7f4f8016.js",
    "revision": "0e5b18b34e0ae9e79dbadbe487bb1a9f"
  },
  {
    "url": "assets/js/11.3102c4ae.js",
    "revision": "becdb681d15089816e32cdbd36ac6df6"
  },
  {
    "url": "assets/js/12.1469a4a1.js",
    "revision": "3a06fe3f90919a8d63cbb7872b1c0c06"
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
    "url": "assets/js/16.787782d1.js",
    "revision": "7bebe9f557033f6c3b26e23ae3e13103"
  },
  {
    "url": "assets/js/17.2a98697d.js",
    "revision": "8fb811e3e64487c9c48d26b21c1ba76c"
  },
  {
    "url": "assets/js/18.1878822f.js",
    "revision": "7305c44e308193402cedad67842411a6"
  },
  {
    "url": "assets/js/19.71d7116c.js",
    "revision": "24ad6c632a49e1ea274d0e69d5266058"
  },
  {
    "url": "assets/js/2.0322bf02.js",
    "revision": "4dae301a721f6c258af3b0d5227bf2eb"
  },
  {
    "url": "assets/js/20.a0457ce2.js",
    "revision": "a477c14b5f7a1dfd31bf8f4f8df48b78"
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
    "url": "assets/js/app.4c4d8d9f.js",
    "revision": "bf0d81f5bbbaf904bb37b92b282415eb"
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
    "revision": "1dec34220de158e9d293c189d2b6d919"
  },
  {
    "url": "yuedu/index.html",
    "revision": "f9dbf9db798aa8ad2f6f9bb0ffc57953"
  },
  {
    "url": "yuedu/一键导入源.html",
    "revision": "8e7ce584c8394d7a566a0ff08e4415c0"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "ff8c8e9e7babb700c690b19a791b351a"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "41dc9d30152e8a4913ef3f61713035f8"
  },
  {
    "url": "yuedu/公告.html",
    "revision": "9f8034d3a3a68e644d5c1be2a0fe1452"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "977419486a2089ee11710c7e1fb186b4"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "603bc4c1ee14b2ec439787ae7dde73b2"
  },
  {
    "url": "yuedu/打赏大佬.html",
    "revision": "67a34256f373cd683814eff3962f127f"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "583eeb57bcc954b6fe5d715156f6d140"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "7de5f1a8fc579e29c24850f59a2c2773"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "44ddd44455224d45c94163f13f52eddd"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "0bfd29445e57a33d41ab808a31943d00"
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
