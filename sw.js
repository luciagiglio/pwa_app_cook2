self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open('static').then(cache=>{
            return cache.addAll(['./', './js/modal.js', './js/navbar.js','./src/index.js','./css/style.css', 'favicon.ico', './css/bootstrap.min.css'
            ,'./img/delightin-dee-_WI3DGseB3g-unsplash.jpg','./img/delightin-dee-HF_Q6QcTolw-unsplash.jpg', './img/delightin-dee-jHjMWJq2XqU-unsplash.jpg',
        './img/delightin-dee-JSE2mRfuan8-unsplash.jpg','./img/louis-hansel-0sYLBZjgTTw-unsplash.jpg']);

        })
    );
    console.log("cached done!");
});


self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
   // console.log(`Intercepting fetch request for:${e.request.url}`);
});