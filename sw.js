/**
 * Service Worker —— PWA 离线缓存核心
 * 策略：
 *   1. install 阶段：预缓存所有核心资源（首次访问后即可完全离线）
 *   2. activate 阶段：清理旧缓存
 *   3. fetch 阶段：缓存优先（离线时直接返回缓存），缓存未命中再请求网络
 * 版本号更新（CACHE_VERSION）可强制刷新缓存
 */
var CACHE_VERSION = 'english-app-v1.6.0';
var CACHE_NAME = CACHE_VERSION;

// 需要预缓存的核心资源
var PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/words.js',
  './js/grammar.js',
  './js/dialogues.js',
  './js/listening.js',
  './js/speak.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png'
];

// ============ 安装：预缓存 ============
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('[SW] 预缓存核心资源');
      // 逐个缓存，避免单个失败导致整体失败
      return Promise.all(
        PRECACHE_URLS.map(function (url) {
          return cache.add(url).catch(function (err) {
            console.warn('[SW] 缓存失败:', url, err.message);
          });
        })
      );
    }).then(function () {
      // 跳过等待，立即激活
      return self.skipWaiting();
    })
  );
});

// ============ 激活：清理旧缓存 ============
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] 清理旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function () {
      // 立即接管所有客户端
      return self.clients.claim();
    })
  );
});

// ============ 拦截请求：缓存优先 ============
self.addEventListener('fetch', function (event) {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  // 跳过 chrome-extension 等非 http(s) 请求
  var url = new URL(event.request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      // 命中缓存：直接返回（离线可用）
      if (cachedResponse) {
        // 后台静默更新缓存（stale-while-revalidate 策略）
        fetch(event.request).then(function (networkResponse) {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(function () {
          // 离线时静默忽略
        });
        return cachedResponse;
      }

      // 未命中缓存：从网络获取，成功则缓存
      return fetch(event.request).then(function (networkResponse) {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        var responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(function () {
        // 网络失败且无缓存：返回首页（让 SPA 路由处理）
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// ============ 接收消息：手动更新缓存 ============
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});
