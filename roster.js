/* Lista de colaboradores da Super Liga (por area), partilhada por toda a app.
   Usa-se: SZfillStaff(elementoSelect, {placeholder:'...'}) para encher um <select>
   com os nomes agrupados por seccao. Os dados vem em direto da Super Liga
   (action=getRoster) e ficam em cache na sessao para nao repetir pedidos. */
(function(){
  var ROSTER_URL='https://script.google.com/macros/s/AKfycbxztRKM-1SdK2PYfVrBQgbelxyDb3FYFMDgG9sWzbWOw9cdJL26G37Ui0jT1ltXZsk9/exec';
  var AREAS={calcado:'Cal\u00E7ado',caixa:'Caixa',textil:'T\u00EAxtil',logistica:'Log\u00EDstica',sup:'Dire\u00E7\u00E3o',estagios:'Est\u00E1gios',visual:'Visual'};
  function get(cb){
    try{ var c=sessionStorage.getItem('sl_roster'); if(c){ cb(JSON.parse(c)); return; } }catch(e){}
    fetch(ROSTER_URL+'?action=getRoster&t='+Date.now(),{cache:'no-store'})
      .then(function(r){return r.json();})
      .then(function(d){ if(Array.isArray(d)){ try{sessionStorage.setItem('sl_roster',JSON.stringify(d));}catch(e){} cb(d);} else cb(null); })
      .catch(function(){ cb(null); });
  }
  window.SZfillStaff=function(sel, opts){
    if(!sel) return; opts=opts||{};
    get(function(roster){
      if(!roster||!roster.length) return;
      var cur=sel.value;
      sel.innerHTML='';
      var ph=document.createElement('option'); ph.value=''; ph.textContent=opts.placeholder||'\u2014 Seleciona o nome \u2014'; sel.appendChild(ph);
      var areas = opts.area ? String(opts.area).split(',') : null;  // limitar a area(s), ex: 'sup'
      roster.forEach(function(g){
        if(areas && areas.indexOf(g.id)<0) return;
        var og=document.createElement('optgroup'); og.label=AREAS[g.id]||g.id;
        (g.nomes||[]).forEach(function(nm){ var o=document.createElement('option'); o.value=nm; o.textContent=nm; og.appendChild(o); });
        sel.appendChild(og);
      });
      if(cur){ try{ sel.value=cur; }catch(e){} }
      else if(opts.autofill){ try{ var _u=(sessionStorage.getItem('sz_user')||'').trim(); if(_u && Array.prototype.some.call(sel.options,function(o){return o.value===_u;})){ sel.value=_u; sel.dispatchEvent(new Event('change')); } }catch(e){} }
    });
  };
  /* preenche automaticamente qualquer <select data-staff> (placeholder via data-ph; area opcional via data-area) */
  function init(root){ var sels=(root||document).querySelectorAll('select[data-staff]'); var single=(sels.length===1); sels.forEach(function(sel){ if(!sel.dataset._szdone){ sel.dataset._szdone='1'; var area=sel.getAttribute('data-area')||''; window.SZfillStaff(sel,{placeholder:sel.getAttribute('data-ph')||'', area:area, autofill:(/sup/.test(area)||single)}); } }); }
  window.SZinitStaff=init;
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded',function(){init();});
})();
