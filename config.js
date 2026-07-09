/* Endereco da nuvem (Google Apps Script).
   Dados partilhados entre telemovel e computador.
   Para desligar a sincronizacao, deixar as aspas vazias. */
window.BACKEND_URL = "https://script.google.com/macros/s/AKfycbxGaFY8bv7lJcI2WbgoTqs_1mp9R85jw-CRkY-tTzsEPR_igqY-LMVtKSJ1hnsuiPlm/exec";

/* Emails da equipa convidados no Google Calendario (separados por virgula). Ex: "a@x.pt,b@x.pt". Vazio = sem convidados. */
window.CAL_EMAILS = "manager9yc@iberiansports.com,store9yc@iberiansports.com";

/* -----------------------------------------------------------------------------
   Alivio de carga do servidor (evita o erro "Demasiadas invocacoes em simultaneo").
   Envolve o fetch: as LEITURAS de ?action=notas passam a ter cache curta (8s) por
   sessao e os pedidos simultaneos iguais sao juntados num so. Escritas (POST)
   limpam a cache para os dados aparecerem logo. Nao mexe em mais nada.
----------------------------------------------------------------------------- */
(function(){
  if(typeof window==='undefined' || !window.fetch || window.__szFetchWrap) return;
  window.__szFetchWrap = true;
  var TTL = 8000;                 // ms que as notas ficam em cache
  var CKEY = 'sz_notas_cache';
  var realFetch = window.fetch.bind(window);
  var pending = null;             // pedido de notas em curso (para juntar simultaneos)
  function mkResp(body){ try{ return new Response(body,{status:200,headers:{'Content-Type':'application/json'}}); }catch(e){ return { ok:true, status:200, text:function(){return Promise.resolve(body);}, json:function(){return Promise.resolve(JSON.parse(body));} }; } }
  function isNotasGet(url,opts){ var m=(opts&&opts.method)?String(opts.method).toUpperCase():'GET'; return m==='GET' && typeof url==='string' && url.indexOf('action=notas')>=0; }
  function isBackendPost(url,opts){ return opts && String(opts.method||'').toUpperCase()==='POST' && typeof url==='string' && window.BACKEND_URL && url.indexOf(window.BACKEND_URL)===0; }

  window.fetch = function(url, opts){
    try{
      if(isNotasGet(url,opts)){
        // 1) cache fresca?
        try{ var c=JSON.parse(sessionStorage.getItem(CKEY)||'null'); if(c && (Date.now()-c.t)<TTL && c.body){ return Promise.resolve(mkResp(c.body)); } }catch(e){}
        // 2) ja ha um pedido igual a decorrer? junta-te a ele
        if(pending){ return pending.then(function(body){ return mkResp(body); }); }
        // 3) faz o pedido real, guarda o resultado (so se for JSON valido)
        pending = realFetch(url,opts).then(function(r){ return r.text(); }).then(function(body){
          if(body && body.indexOf('"ok":true')>=0){ try{ sessionStorage.setItem(CKEY, JSON.stringify({t:Date.now(), body:body})); }catch(e){} }
          pending=null; return body;
        }, function(err){ pending=null; throw err; });
        return pending.then(function(body){ return mkResp(body); });
      }
      if(isBackendPost(url,opts)){ try{ sessionStorage.removeItem(CKEY); }catch(e){} }
    }catch(e){}
    return realFetch(url, opts);
  };
})();

/* -----------------------------------------------------------------------------
   Navegacao para o inicio (SEM botao Home):
   - esconde o antigo botao Home em TODAS as paginas
   - voltar ao menu: arrastar da BORDA ESQUERDA do ecra para a direita,
     ou tocar no LOGOTIPO (que faz um efeito ao tocar)
----------------------------------------------------------------------------- */
(function(){
  if(typeof document==='undefined') return;
  var isIndex = /(^|\/)(index\.html?)?$/.test(location.pathname); // '/', '/index.html', '/portal/', etc.
  try{
    var st=document.createElement('style');
    st.textContent='.icon-btn[href="index.html"],#homeBtn{display:none!important;}'
      +'.logo{cursor:pointer;-webkit-tap-highlight-color:transparent;}'
      +'@keyframes szLogoPulse{0%{transform:scale(1);}45%{transform:scale(.8);}100%{transform:scale(1);}}'
      +'.logo.sz-press{animation:szLogoPulse .45s ease;}';
    (document.head||document.documentElement).appendChild(st);
  }catch(e){}
  if(isIndex) return; // no menu principal nao ha "voltar"
  function irInicio(){ location.href='index.html'; }
  document.addEventListener('DOMContentLoaded', function(){
    var logo=document.querySelector('.logo');
    if(logo){ logo.addEventListener('click', function(){ logo.classList.add('sz-press'); setTimeout(irInicio, 230); }); }
  });
  // gesto: comecar junto a BORDA ESQUERDA (<=32px) e arrastar para a direita
  var x0=null,y0=null,t0=0;
  document.addEventListener('touchstart', function(e){
    if(e.touches.length!==1){ x0=null; return; }
    var t=e.touches[0]; x0=(t.clientX<=32)?t.clientX:null; y0=t.clientY; t0=Date.now();
  }, {passive:true});
  document.addEventListener('touchend', function(e){
    if(x0===null) return;
    var t=e.changedTouches[0], dx=t.clientX-x0, dy=t.clientY-y0, dt=Date.now()-t0; x0=null;
    if(dt<700 && dx>80 && Math.abs(dy)<55){ irInicio(); }
  }, {passive:true});
})();
