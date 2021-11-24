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
    "revision": "f60c62b2806cb913f8ea077f40805714"
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
    "url": "assets/js/10.70155d29.js",
    "revision": "3a77eeed621e6cd9a5dae482994a863e"
  },
  {
    "url": "assets/js/11.c42d83e9.js",
    "revision": "e95628480310353f5419f22307e979b2"
  },
  {
    "url": "assets/js/12.2d5c464d.js",
    "revision": "06890495e301302db2c4b37da17bf14c"
  },
  {
    "url": "assets/js/13.f499c0d2.js",
    "revision": "723d4381b6aba7e08cfa811006fbe700"
  },
  {
    "url": "assets/js/14.c8ef080b.js",
    "revision": "0fc704e43934fa9544476231c8e1d897"
  },
  {
    "url": "assets/js/15.aa1bcc22.js",
    "revision": "24e54a7e8508de0bb5b14416c7378fe9"
  },
  {
    "url": "assets/js/16.fa3535b3.js",
    "revision": "a0ae8614d099e4fdb87e63e2114acbf4"
  },
  {
    "url": "assets/js/17.15c0a771.js",
    "revision": "5e1ac226371769366593f99b751d5e96"
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
    "url": "assets/js/app.f40e6975.js",
    "revision": "e726b28abb272602aabbe3fc57ca0394"
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
    "revision": "76c6d0ad818b4db509d82db1d42b6c75"
  },
  {
    "url": "yuedu/index.html",
    "revision": "697fd18c7c74af4c7e21b79958ddb31d"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "b0d233737a919200cdff565ceb591ee1"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "87db4bbbad9aca1fe77cf371a0246aa0"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "66a31a678a9796bf0d6ec983e1977015"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "305e2305a6d974d2cbf676b8605b28d8"
  },
  {
    "url": "yuedu/批量美化发现列表.html",
    "revision": "6ea2a010b94d8a5e3e804ee8c5585310"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "8f855136ad57941ce926661ed645bd09"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "b825815a14e702a3cc0c121050c504ae"
  },
  {
    "url": "yuedu/软件下载.html",
    "revision": "0cd770f79f4029996b00575037bf2627"
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
