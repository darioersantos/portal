/* Service Worker - Portal Vasco da Gama - DESATIVADO
 * Substitui o service worker antigo (que guardava as paginas em cache).
 * Este nao guarda nada: apaga todas as caches, deixa de intercetar pedidos
 * e desliga-se a si proprio. Quem tem a app instalada passa a ver o selo. */
self.addEventListener("install", function (e) { self.skipWaiting(); });

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) {
        return Promise.all(ks.map(function (k) { return caches["delete"](k); }));
      })
      .then(function () { return self.clients.claim(); })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: "window" }); })
      .then(function (cs) { cs.forEach(function (c) { c.navigate(c.url); }); })
      ["catch"](function () {})
  );
});

/* Sem handler de fetch: os pedidos vao sempre a rede, nunca a cache. */
