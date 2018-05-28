//importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/feed.html',
       '/profile.html',
       '/widget.html',
       '/manifest.json',
       '/index.js',
       '/app.js',
       '/prof.js',
       '/config.js',
       '/common.js',
       '/fonts',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/styles.css'
     ]);
   })
 );
});