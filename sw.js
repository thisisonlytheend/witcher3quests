/* Offline cache. Bump VERSION when the app changes so phones pick up the update. */
const VERSION = "v2";
const CACHE = "quest-ledger-" + VERSION;
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "fonts/alegreya-sans-latin-400-normal.woff2", "fonts/alegreya-sans-latin-500-normal.woff2", "fonts/alegreya-sans-latin-700-normal.woff2", "fonts/alegreya-sc-latin-500-normal.woff2", "fonts/alegreya-sc-latin-700-normal.woff2", "fonts/ibm-plex-mono-latin-400-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf("quest-ledger-") === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; /* wiki links and anything external go straight to the network */
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    return hit || fetch(e.request).catch(function () { return caches.match("index.html"); });
  }));
});
