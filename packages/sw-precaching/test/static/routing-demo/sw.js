importScripts('/packages/sw-precaching/build/sw-precaching.min.js');
importScripts('/packages/sw-precaching/node_modules/sw-routing/build/sw-routing.min.js');
importScripts('/packages/sw-precaching/node_modules/sw-runtime-caching/build/sw-runtime-caching.min.js');

/* global goog */

const revcacheManager = new goog.precaching.RevisionedCacheManager();
revcacheManager.addToCacheList({revisionedFiles: [
  {url: 'example.html', revision: '1234'},
]});

const cacheName = revcacheManager.getCacheName();
const cachedURLs = revcacheManager.getCachedUrls();

const route = new goog.routing.Route({
  match: ({url, event}) => {
    return (cachedURLs.indexOf(url.href) !== -1);
  },
  handler: new goog.runtimeCaching.CacheFirst({
    requestWrapper: new goog.runtimeCaching.RequestWrapper({
      cacheName: cacheName,
    }),
  }),
});

const router = new goog.routing.Router();
router.registerRoute({route});

self.addEventListener('install', (event) => {
  event.waitUntil(revcacheManager.install());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(revcacheManager.cleanup());
});
