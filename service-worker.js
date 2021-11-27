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
    "revision": "e1fd00f12f73f7fcc21cef00350fc8f1"
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
    "url": "assets/js/10.99123f55.js",
    "revision": "019d88cd560254512d2f72d9b2c3d873"
  },
  {
    "url": "assets/js/11.2ba05150.js",
    "revision": "4805e24e441401fc7d400cedae7d5c7a"
  },
  {
    "url": "assets/js/12.1ec62032.js",
    "revision": "a42c134d8260972de596384342b98aed"
  },
  {
    "url": "assets/js/13.174d5ed2.js",
    "revision": "cf8de40fb3d240d1eebbd07d1e7c210f"
  },
  {
    "url": "assets/js/14.6d02fade.js",
    "revision": "0b67140257ec792db912bac54657d709"
  },
  {
    "url": "assets/js/15.e1fa73c1.js",
    "revision": "35e30b3197371d226e41e1efb0091d38"
  },
  {
    "url": "assets/js/16.cb78f466.js",
    "revision": "772409e22e1f2a35835b260ad2775f8d"
  },
  {
    "url": "assets/js/17.883317ab.js",
    "revision": "773d48b8806870fb9fabb3343c4642cc"
  },
  {
    "url": "assets/js/18.32f8005f.js",
    "revision": "4ee4cdc20300db0d4056a15a165cca70"
  },
  {
    "url": "assets/js/2.f0f89ceb.js",
    "revision": "07827f0afd7cbaf32350e51c1a7825e7"
  },
  {
    "url": "assets/js/3.e56e85f0.js",
    "revision": "100dd381adb9e60d00d3787cc498ca86"
  },
  {
    "url": "assets/js/4.d464a100.js",
    "revision": "466f6eb741218e33e68cd71b0de65a39"
  },
  {
    "url": "assets/js/5.74cd00e8.js",
    "revision": "5fc1012bc1da3070d0d329b05a786b20"
  },
  {
    "url": "assets/js/6.20fa370e.js",
    "revision": "be50dbfa25bd8ff39d811c35d4f064ab"
  },
  {
    "url": "assets/js/7.a14501ed.js",
    "revision": "9e4be6e79087e6c56d93f46a47441f0b"
  },
  {
    "url": "assets/js/8.3722321a.js",
    "revision": "5f5f2fce66676dec17049520d3fe8e52"
  },
  {
    "url": "assets/js/9.75c5fce0.js",
    "revision": "e32455170efac087244d8fcef6f89048"
  },
  {
    "url": "assets/js/app.1fc46cbd.js",
    "revision": "b68fdcd8ab626b3f49a89d0dddbac040"
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
    "revision": "1be9bcaed15bab864f9d9001cf965469"
  },
  {
    "url": "yuedu/index.html",
    "revision": "87962b127e1af331425fc4cecf517852"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "0963ad7497ad6807da45a979fa2fe018"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "244c9b3dcf25d1cac0c4a46daced7874"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "ec45f08435dac1f38c8a28f09f985c87"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "f9019906179a87ad047625a9043039cb"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "d0559563898f9c3e8739fb5dffba5f35"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "c6c908cc5912fc8efc972442a5439011"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "fb1150d32d79b6299d5b3345e45f32c7"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "13d085c7981e84b4c78d6f9cf04b9032"
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
