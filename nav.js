/* Portal Sport Zone Vasco da Gama - DESATIVADO
 * Este ficheiro e carregado por 49 das 54 paginas do portal, por isso basta
 * ele para as bloquear todas: tapa a pagina com o selo e impede a interacao.
 * Tambem remove o service worker e a cache (app instalada no telemovel). */
(function () {
  function bloquear() {
    try { for (var i = 1; i < 9999; i++) { clearInterval(i); clearTimeout(i); } } catch (e) {}
    if (document.getElementById("vdgDesativado")) return;
    var ov = document.createElement("div");
    ov.id = "vdgDesativado";
    ov.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:#0b0b0d;" +
      "display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;" +
      "font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;" +
      "color:#f0f0f0;overflow:hidden";
    ov.innerHTML =
      '<div style="max-width:460px;width:100%">' +
        '<div style="display:inline-block;max-width:100%;margin:0 auto 30px;padding:13px 20px;' +
          'border:5px solid #d32f2f;border-radius:9px;color:#d32f2f;white-space:nowrap;' +
          'font-size:clamp(21px,6.6vw,44px);font-weight:900;letter-spacing:2.5px;' +
          'text-transform:uppercase;line-height:1;transform:rotate(-11deg);opacity:.95;' +
          'box-shadow:0 0 0 3px rgba(211,47,47,.18),0 8px 34px rgba(211,47,47,.22);' +
          'text-shadow:0 2px 5px rgba(0,0,0,.35)">Desativada</div>' +
        '<h1 style="font-size:20px;font-weight:700;margin:0 0 12px;color:#fff">' +
          'Esta aplica&#231;&#227;o foi desativada</h1>' +
        '<p style="font-size:15px;line-height:1.6;color:#a8a8ad;margin:0 0 10px">' +
          'O <b>portal de gest&#227;o</b> da loja <b>Vasco da Gama</b> deixou de estar em funcionamento.</p>' +
        '<p style="font-size:15px;line-height:1.6;color:#a8a8ad;margin:0">' +
          'Os dados j&#225; n&#227;o s&#227;o atualizados nem guardados.</p>' +
        '<div style="margin-top:26px;padding-top:18px;border-top:1px solid #26262b;' +
          'font-size:12px;color:#6e6e75;line-height:1.5">' +
          'Se precisas de acesso, fala com a ger&#234;ncia da loja.</div>' +
      '</div>';
    (document.body || document.documentElement).appendChild(ov);
    try {
      document.documentElement.style.overflow = "hidden";
      if (document.body) document.body.style.overflow = "hidden";
    } catch (e) {}
  }
  try {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (rs) {
        rs.forEach(function (r) { r.unregister(); });
      });
    }
    if (window.caches && caches.keys) {
      caches.keys().then(function (ks) { ks.forEach(function (k) { caches["delete"](k); }); });
    }
  } catch (e) {}
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bloquear);
  } else { bloquear(); }
  setTimeout(bloquear, 1200);
})();
