/* Menu lateral partilhado por todas as paginas. Editar AQUI muda a barra em toda a app. */
window.PORTAL_NAV = [
  {group:null, items:[
    {k:'__home', ic:'home', nm:'Início', active:true},
    {k:'superliga', ic:'trophy', nm:'Super Liga', dark:true},
    {k:'contagem', ic:'calculator', nm:'Contagem de Dinheiro', accent2:true},
    {k:'topvendas', ic:'award', nm:'Top Vendas', accent3:true},
    {k:'vendas', ic:'bar-chart-3', nm:'Análise de Vendas', accent:true},
    {k:'planeamento', ic:'trending-up', nm:'Produtividade', accent4:true}
  ]},
  {group:'Operações', items:[
    {k:'lembretes', ic:'list-checks', nm:'Tarefas', badgeId:'nbTar'},
    {k:'mural', ic:'calendar-days', nm:'Lembretes', badgeId:'nbLem'},
    {k:'roturas', ic:'package', nm:'Ruturas'},
    {k:'permanencia', ic:'book-open', nm:'Relatório de Permanência'}
  ]},
  {group:'Staff', items:[
    {k:'equipa', ic:'users', nm:'Horário do Staff'},
    {k:'formacoes', ic:'graduation-cap', nm:'Formações'},
    {k:'staffdb', ic:'contact', nm:'Base de Dados Staff'},
    {k:'pontualidade', ic:'calendar-days', nm:'Atrasos e Faltas'},
    {k:'aniversario', ic:'cake', nm:'Aniversários'},
    {k:'folgas', ic:'calendar-clock', nm:'Pedido de Trocas e Folgas'},
    {k:'ferias', ic:'umbrella', nm:'Pedido de Férias'},
    {k:'limitacoes_horario', ic:'clock', nm:'Limitações de Horário'},
    {k:'competencias', ic:'bar-chart-3', nm:'Mapa de Competências'},
    {k:'caderno', ic:'book-open', nm:'Caderno de Acompanhamento'}
  ]},
  {group:'Outros', items:[
    {k:'checklists', ic:'clipboard-check', nm:'Checklist Abertura/Fecho'},
    {k:'limpeza', ic:'clipboard-list', nm:'Checklist de Loja'},
    {k:'incidencias', ic:'siren', nm:'Incidências de Manutenção'},
    {k:'notas', ic:'square-pen', nm:'Bloco de Notas'},
    {k:'consumiveis', ic:'shopping-bag', nm:'Encomendas'},
    {k:'atas', ic:'file-text', nm:'Reuniões'}
  ]},
  {group:'Plano Formativo Interno', items:[
    {k:'pf_entrada', ic:'door-open', nm:'Entrada de loja'},
    {k:'pf_provadores', ic:'shirt', nm:'Provadores'},
    {k:'pf_atendimento', ic:'users', nm:'Atendimento ao cliente'},
    {k:'pf_szclub', ic:'ticket', nm:'SZ Club'},
    {k:'pf_onlines', ic:'globe', nm:'Venda de onlines'},
    {k:'pf_sprays', ic:'spray-can', nm:'Venda de sprays'},
    {k:'pf_palmilhas', ic:'footprints', nm:'Venda de palmilhas'}
  ]},
  {group:'Formulários', items:[
    {k:'happyhour', ic:'banknote', nm:'Happy Hour'},
    {k:'alarmado', ic:'tag', nm:'Alarmado'},
    {k:'admissao', ic:'user-plus', nm:'Pedido de Admissão'},
    {k:'avaliacoes', ic:'star', nm:'Avaliações Mensais'},
    {k:'atendimento_loja', ic:'shopping-bag', nm:'Atendimento Loja'},
    {k:'atendimento_caixa', ic:'receipt', nm:'Atendimento Caixa'},
    {k:'satisfacao_staff', ic:'smile', nm:'Satisfação Staff'}
  ]},
  {group:'Imprimíveis', items:[
    {k:'sinaletica', ic:'signpost', nm:'Sinalética'},
    {k:'alarmes', ic:'siren', nm:'Alarmes'},
    {k:'entradas_saidas', ic:'user', nm:'Registo de Funcionário'},
    {k:'dispositivos', ic:'smartphone', nm:'Equipamentos'},
    {k:'daily_float', ic:'pound-sterling', nm:'Daily Float'},
    {k:'movimento_cofre', ic:'lock', nm:'Movimento Cofre'},
    {k:'vdl', ic:'package', nm:'VDL'},
    {k:'folha_reserva', ic:'clipboard', nm:'Folha Reserva'},
    {k:'folha_elogio', ic:'award', nm:'Folha de Elogio'},
    {k:'garrafas', ic:'recycle', nm:'Garrafas Volta'},
    {k:'superliga_registo', ic:'receipt', nm:'Registo de Vendas'},
    {k:'avaliacoes_google', ic:'star', nm:'Avaliações Google'}
  ]},
  {group:'Wallpapers', items:[
    {k:'wp_loja', ic:'smartphone', nm:'Telemóvel Loja'},
    {k:'wp_direcao', ic:'smartphone', nm:'Telemóvel Direção'},
    {k:'wp_pc', ic:'monitor', nm:'Wallpaper PC'}
  ]}
];

/* ==== MODO PUBLICO: links partilhados (?publico=1) mostram so o formulario, sem menu/topo/login ==== */
(function(){
  try{
    if(!/[?&]publico=1/.test(location.search||'')) return;
    var d=document.documentElement; d.setAttribute('data-public','1');
    var css='[data-public] .sidebar,[data-public] .sb-backdrop,[data-public] .topbar,[data-public] .menu-btn,[data-public] #login,[data-public] #shareBox,[data-public] .sz-admin,[data-public] .tabs{display:none !important;}'
      +'[data-public] .main{margin-left:0 !important;min-height:0 !important;}'
      +'[data-public] .content{max-width:640px;margin:0 auto;padding:16px calc(16px + env(safe-area-inset-right)) 46px calc(16px + env(safe-area-inset-left)) !important;}'
      +'[data-public] body{background:#f5f6f8;}';
    var s=document.createElement('style'); s.textContent=css; (document.head||d).appendChild(s);
    document.addEventListener('DOMContentLoaded',function(){
      try{ var c=document.querySelector('.content'); if(c && !document.getElementById('szPubHead')){
        var h=document.createElement('div'); h.id='szPubHead'; h.style.cssText='display:flex;align-items:center;gap:11px;margin:0 0 18px;';
        h.innerHTML='<div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#FF8100,#E05500);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex:none;">SZ</div><div><div style="font-weight:800;font-size:15px;color:#1a1d21;">Sport Zone Vasco da Gama</div><div style="font-size:12px;color:#8b929c;">Formulário</div></div>';
        c.insertBefore(h,c.firstChild);
      } }catch(e){}
    });
  }catch(e){}
})();

/* ==== leitura mais rapida: pedir os dados sem a "bagagem" pesada (light) ====
   As paginas de Formacao/Vendas/Planeamento precisam das seccoes grandes
   (_pfhist / _vendas / _vendasHist / _plan). TODAS as outras paginas passam a
   pedir "?action=notas&light=1" para o backend devolver tudo MENOS essas seccoes
   (na Google Sheets o _pfhist sozinho sao ~3,7 MB). Retrocompativel: se o backend
   ainda nao souber do parametro, ignora-o e devolve tudo na mesma. */
(function(){
  try{
    var HEAVY=/(vendas-web|planeamento|atendimento_cliente|entrada|onlines|palmilhas|provadores|sprays|szclub)\.html/i;
    var heavyPage=HEAVY.test(location.pathname||'');
    var of=window.fetch; if(typeof of!=='function') return;
    function wait(){ return new Promise(function(res){ setTimeout(res, 900); }); }
    function netFetch(self, url, init){
      var tries=0;
      function go(){
        tries++;
        var ctrl=null; try{ ctrl=new AbortController(); }catch(e){}
        var opt={}; try{ if(init){ for(var k in init){ opt[k]=init[k]; } } }catch(e){}
        if(ctrl) opt.signal=ctrl.signal;
        var timer=setTimeout(function(){ try{ ctrl&&ctrl.abort(); }catch(e){} }, 13000);
        return of.call(self, url, opt).then(function(r){ clearTimeout(timer); if(r&&r.ok) return r; if(tries<3) return wait().then(go); return r; })
          .catch(function(err){ clearTimeout(timer); if(tries<3) return wait().then(go); throw err; });
      }
      return go();
    }
    function ckey(url){ return 'sz_notas_c'+(String(url).indexOf('light=1')>=0?'L':'F'); }
    function cget(k){ try{ var t=localStorage.getItem(k); if(t && t.length>20) return t; }catch(e){} return null; }
    function cset(k,t){ try{ if(t && t.length>20 && t.length<2600000) localStorage.setItem(k,t); }catch(e){} }
    function mkResp(t){ try{ return new Response(t, {status:200, headers:{'Content-Type':'application/json'}}); }catch(e){ return null; } }
    window.fetch=function(input, init){
      var self=this;
      try{ if(typeof input==='string' && input.indexOf('script.google.com')>=0){ var mth0=(init&&init.method)?String(init.method).toUpperCase():'GET'; if(mth0==='POST' && init && typeof init.body==='string' && /nota_(add|done|del)/.test(init.body)){ try{ sessionStorage.setItem('sz_notas_dirty','1'); }catch(e){} } } }catch(e){}
      var isNotasGet=false, url=input;
      try{ if(typeof input==='string' && input.indexOf('action=notas')>=0){ var mth=(init&&init.method)?String(init.method).toUpperCase():'GET'; if(mth==='GET'){ isNotasGet=true; if(!heavyPage && input.indexOf('light=')<0){ url=input+(input.indexOf('?')>=0?'&':'?')+'light=1'; } } } }catch(e){}
      if(!isNotasGet) return of.call(self, input, init);
      try{
        var K=ckey(url);
        var dirty=false; try{ dirty=sessionStorage.getItem('sz_notas_dirty')==='1'; }catch(e){}
        var cached=dirty?null:cget(K);
        if(cached){ var resp=mkResp(cached); if(resp){
          netFetch(self, url, init).then(function(r){ if(r&&r.ok){ r.clone().text().then(function(t){ cset(K,t); }).catch(function(){}); } }).catch(function(){});
          return Promise.resolve(resp);
        } }
        return netFetch(self, url, init).then(function(r){
          if(r&&r.ok){ r.clone().text().then(function(t){ cset(K,t); try{ sessionStorage.removeItem('sz_notas_dirty'); }catch(e){} }).catch(function(){}); }
          return r;
        }).catch(function(err){ var c=cget(K); var cr=c?mkResp(c):null; if(cr) return cr; throw err; });
      }catch(e){ return of.call(self, input, init); }
    };
  }catch(e){}
})();

/* ==== ajustes globais partilhados (todas as paginas que carregam o nav.js) ==== */
(function(){
  /* 1) CSS global: selects uniformes + efeitos premium (tapes, ripple, entrada, hover, pull-to-refresh) */
  var css = `
  .field select, select[data-staff]{-webkit-appearance:none !important;appearance:none !important;width:100%;box-sizing:border-box;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center;padding-right:38px;}

  /* --- base premium --- */
  *{-webkit-tap-highlight-color:transparent;}
  html{scroll-behavior:smooth;}
  html,body{overscroll-behavior-y:contain;}
  /* evitar zoom por duplo-toque acidental (mantem scroll normal) */
  html{touch-action:manipulation;-webkit-text-size-adjust:100%;}
  /* destaque amarelo (Top Vendas) */
  .sb-item.accent3{background:linear-gradient(135deg,#fde047,#f4c400);color:#6b4e00;margin:5px 0;box-shadow:0 4px 12px rgba(234,179,8,.32);font-weight:800;}
  .sb-item.accent3:hover{background:linear-gradient(135deg,#ffe86b,#ffd21f);color:#5a4200;}
  .sb-item.accent3 .ico{color:#8a6500;}
  .sb-item.accent3.active{background:linear-gradient(135deg,#ffe86b,#ffd21f);}
  .sb-item.accent3.active::before{display:none;}
  /* Produtividade: laranja com tom azulado (laranja -> azul) */
  .sb-item.accent4{background:linear-gradient(135deg,#ff7a1a,#3d6ef5);color:#fff;margin:5px 0;box-shadow:0 4px 12px rgba(61,110,245,.30);font-weight:800;}
  .sb-item.accent4:hover{background:linear-gradient(135deg,#ff8a33,#4f7cff);filter:brightness(1.03);}
  .sb-item.accent4 .ico{color:#fff;}
  .sb-item.accent4.active{background:linear-gradient(135deg,#ff8a33,#4f7cff);}
  .sb-item.accent4.active::before{display:none;}
  /* Horario do Staff: azul claro */
  .sb-item.accent5{background:linear-gradient(135deg,#dbeafe,#bfdbfe);color:#1e40af;margin:5px 0;box-shadow:0 3px 10px rgba(59,130,246,.20);font-weight:800;}
  .sb-item.accent5:hover{background:linear-gradient(135deg,#e4efff,#cbe0ff);}
  .sb-item.accent5 .ico{color:#2563eb;}
  .sb-item.accent5.active{background:linear-gradient(135deg,#c7ddff,#a9c9ff);}
  .sb-item.accent5.active::before{display:none;}
  /* Formacoes: roxo claro */
  .sb-item.accent6{background:linear-gradient(135deg,#ede9fe,#ddd6fe);color:#6d28d9;margin:5px 0;box-shadow:0 3px 10px rgba(139,92,246,.20);font-weight:800;}
  .sb-item.accent6:hover{background:linear-gradient(135deg,#f2edff,#e5ddff);}
  .sb-item.accent6 .ico{color:#7c3aed;}
  .sb-item.accent6.active{background:linear-gradient(135deg,#e3dcff,#d0c4fb);}
  .sb-item.accent6.active::before{display:none;}

  /* --- feedback tatil ao tocar --- */
  button,.btn,.ghostbtn,.qtile,.kpi,.tb-icon,.more,.sb-item,.brief-it,[data-go],.tab,.jmbtn,.lb-iconbtn,.av-print,.jchk{transition:transform .14s cubic-bezier(.34,1.4,.64,1),box-shadow .22s ease,background-color .2s ease,border-color .2s ease,filter .2s ease;}
  button:active,.btn:active,.ghostbtn:active,.qtile:active,.kpi:active,.tb-icon:active,.more:active,.sb-item:active,.brief-it:active,[data-go]:active,.tab:active,.jmbtn:active,.av-print:active{transform:scale(.955);}

  /* --- ripple --- */
  .sz-rippling{position:relative;overflow:hidden;}
  .sz-ripple{position:absolute;border-radius:50%;background:rgba(120,124,134,.26);transform:scale(0);pointer-events:none;z-index:1;animation:sz-ripple-a .6s cubic-bezier(.22,.61,.36,1);}
  @keyframes sz-ripple-a{to{transform:scale(2.5);opacity:0;}}

  /* --- animacao de entrada da pagina --- */
  @media (prefers-reduced-motion: no-preference){
    .content{animation:sz-fade .4s ease backwards;}
    .kpi,.panel,.card,.brief{animation:sz-rise .5s cubic-bezier(.22,.61,.36,1) backwards;}
    .kpi:nth-child(2){animation-delay:.05s}.kpi:nth-child(3){animation-delay:.10s}.kpi:nth-child(4){animation-delay:.15s}
    .qtile{animation:sz-rise .45s cubic-bezier(.22,.61,.36,1) backwards;}
    .qtile:nth-child(2){animation-delay:.04s}.qtile:nth-child(3){animation-delay:.08s}.qtile:nth-child(4){animation-delay:.12s}.qtile:nth-child(5){animation-delay:.16s}.qtile:nth-child(6){animation-delay:.20s}
  }
  @keyframes sz-fade{from{opacity:0}to{opacity:1}}
  @keyframes sz-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

  /* --- hover lift (so em ecra com rato) --- */
  @media (hover:hover) and (prefers-reduced-motion: no-preference){
    .kpi,.qtile,.card{transition:transform .2s ease,box-shadow .25s ease;}
    .kpi:hover,.qtile:hover,.card:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(20,24,30,.13);}
    .sb-item:hover{transform:translateX(2px);}
    .btn:hover,.ghostbtn:hover,.jmbtn:hover{filter:brightness(1.04);}
  }

  /* --- pull-to-refresh badge --- */
  #sz-ptr{position:fixed;top:0;left:0;right:0;display:flex;align-items:flex-start;justify-content:center;height:0;overflow:visible;z-index:2147483000;pointer-events:none;padding-top:0;}
  #sz-ptr .sz-ptr-pill{margin-top:6px;display:flex;align-items:center;gap:9px;background:#fff;border-radius:999px;padding:8px 16px 8px 9px;box-shadow:0 12px 34px rgba(20,24,30,.30);transform:translateY(0) scale(.85);opacity:0;transition:opacity .16s ease,transform .16s ease,background-color .2s ease;}
  #sz-ptr .sz-ptr-ic{width:30px;height:30px;border-radius:50%;background:#FF8100;display:flex;align-items:center;justify-content:center;flex:none;}
  #sz-ptr .sz-ptr-a{width:17px;height:17px;stroke:#fff;stroke-width:2.8;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s cubic-bezier(.34,1.4,.64,1);}
  #sz-ptr .sz-ptr-ring{display:none;width:16px;height:16px;border:2.6px solid #fff;border-top-color:transparent;border-radius:50%;}
  #sz-ptr .sz-ptr-txt{font-size:13px;font-weight:800;color:#3a4048;white-space:nowrap;letter-spacing:-.1px;}
  #sz-ptr.armed .sz-ptr-pill{background:#16a34a;}
  #sz-ptr.armed .sz-ptr-ic{background:rgba(255,255,255,.28);}
  #sz-ptr.armed .sz-ptr-txt{color:#fff;}
  #sz-ptr.loading .sz-ptr-ic{background:#FF8100;}
  #sz-ptr.loading .sz-ptr-a{display:none;}
  #sz-ptr.loading .sz-ptr-ring{display:block;animation:sz-ptr-spin .7s linear infinite;}
  @keyframes sz-ptr-spin{to{transform:rotate(360deg)}}
  `;
  try{ var s=document.createElement('style'); s.textContent=css; (document.head||document.documentElement).appendChild(s); }catch(e){}

  /* 2) manter a posicao de scroll do menu lateral entre paginas */
  document.addEventListener('DOMContentLoaded', function(){
    var nav=document.getElementById('sbNav'); if(!nav) return;
    try{ var y=sessionStorage.getItem('sz_navscroll'); if(y!=null) nav.scrollTop=parseInt(y,10)||0; }catch(e){}
    nav.addEventListener('scroll', function(){ try{ sessionStorage.setItem('sz_navscroll', nav.scrollTop); }catch(e){} }, {passive:true});
  });

  /* 3) efeito ripple ao tocar em botoes/mosaicos */
  document.addEventListener('pointerdown', function(e){
    if(e.button && e.button!==0) return;
    var t=e.target.closest && e.target.closest('button,.btn,.ghostbtn,.qtile,.tb-icon,.more,.sb-item,.jmbtn,.tab,.brief-it,.av-print');
    if(!t || t.disabled) return;
    var r=t.getBoundingClientRect(); if(!r.width) return;
    t.classList.add('sz-rippling');
    var sp=document.createElement('span'); sp.className='sz-ripple';
    var size=Math.max(r.width,r.height);
    sp.style.width=sp.style.height=size+'px';
    sp.style.left=(e.clientX-r.left-size/2)+'px';
    sp.style.top=(e.clientY-r.top-size/2)+'px';
    t.appendChild(sp);
    setTimeout(function(){ try{ sp.remove(); }catch(_){} }, 620);
  }, {passive:true});
})();

/* ==== correcoes globais do menu (propaga a todas as paginas) ==== */
(function(){
  /* icones do menu que podem faltar/ser apagados nalgumas paginas -> ficam SEMPRE garantidos */
  var MENUIC={
    'trending-up':'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'calendar-days':'<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    'graduation-cap':'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    'contact':'<path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>',
    'award':'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'clock':'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'book-open':'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    'cake':'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/>',
    'umbrella':'<path d="M22 12a10.06 10.06 0 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/>',
    'calendar-clock':'<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="18" cy="18" r="4"/><path d="M18 16.5V18l1 1"/>'
  };
  var ACC={topvendas:'accent3', planeamento:'accent4', equipa:'accent5', formacoes:'accent6'};
  function ensureIcons(){ if(typeof window.IC==='object' && window.IC){ var added=0; for(var k in MENUIC){ if(!window.IC[k]){ window.IC[k]=MENUIC[k]; added++; } } return added; } return 0; }
  function applyAccents(){ for(var k in ACC){ var el=document.querySelector('.sb-item[data-k="'+k+'"]'); if(el) el.classList.add(ACC[k]); } }
  document.addEventListener('DOMContentLoaded', function(){
    try{
      var added=ensureIcons();
      /* garantir que QUALQUER futura reconstrucao do menu mantem icones + cores */
      if(typeof window.renderSidebar==='function' && !window.renderSidebar._szWrap){
        var orig=window.renderSidebar;
        window.renderSidebar=function(){ ensureIcons(); var r=orig.apply(this, arguments); applyAccents(); return r; };
        window.renderSidebar._szWrap=1;
      }
      /* se faltavam icones, reconstruir o menu ja renderizado (uma vez) */
      if(added>0 && typeof window.renderSidebar==='function'){ try{ window.renderSidebar(); }catch(e){} }
      applyAccents();
      /* clicar no logotipo/marca -> pagina principal */
      var br=document.querySelector('.sb-brand');
      if(br && !br._szHome){ br._szHome=1; br.style.cursor='pointer'; br.setAttribute('title','Ir para o inicio');
        br.addEventListener('click', function(){ location.href='dashboard.html'; }); }
    }catch(e){}
  });
})();

/* ==== evitar zoom acidental (pinch / gesto / duplo-toque) em toda a app ==== */
(function(){
  try{
    var vp=document.querySelector('meta[name="viewport"]');
    if(!vp){ vp=document.createElement('meta'); vp.setAttribute('name','viewport'); (document.head||document.documentElement).appendChild(vp); }
    vp.setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
  }catch(e){}
  /* iOS: bloquear o gesto de pinça e o zoom por dois dedos */
  document.addEventListener('gesturestart', function(e){ e.preventDefault(); }, {passive:false});
  document.addEventListener('gesturechange', function(e){ e.preventDefault(); }, {passive:false});
  document.addEventListener('touchmove', function(e){ if(e.touches && e.touches.length>1){ e.preventDefault(); } }, {passive:false});
})();

/* ==== Puxar para atualizar (pull-to-refresh) - PWA + browser mobile ==== */
(function(){
  if(!('ontouchstart' in window)) return;
  var TH=92, DZ=12, startY=0, pulling=false, dist=0, ind=null, busy=false, offTop=56;
  /* posicao segura: por BAIXO da barra de topo (evita ficar escondido em PWA/notch) */
  function ptrTop(){ try{ var tb=document.querySelector('.topbar'); if(tb){ var r=tb.getBoundingClientRect(); if(r.height>0 && r.bottom>0) return Math.round(r.bottom)+4; } }catch(e){} return 56; }
  function mkInd(){
    if(ind) return ind;
    ind=document.createElement('div'); ind.id='sz-ptr';
    ind.innerHTML='<div class="sz-ptr-pill"><span class="sz-ptr-ic"><svg class="sz-ptr-a" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></svg><span class="sz-ptr-ring"></span></span><span class="sz-ptr-txt">Puxa para atualizar</span></div>';
    document.body.appendChild(ind); return ind;
  }
  function fixedAncestor(el){ while(el && el!==document.body){ try{ var p=getComputedStyle(el).position; if((p==='fixed'||p==='sticky') && (!el.className || String(el.className).indexOf('topbar')<0)) return true; }catch(e){} el=el.parentElement; } return false; }
  function atTop(){ var se=document.scrollingElement||document.documentElement; return (window.pageYOffset||se.scrollTop||0)<=0; }
  window.addEventListener('touchstart', function(e){
    if(busy || e.touches.length!==1 || !atTop() || fixedAncestor(e.target)){ pulling=false; return; }
    startY=e.touches[0].clientY; pulling=true; dist=0; offTop=ptrTop();
  }, {passive:true});
  window.addEventListener('touchmove', function(e){
    if(!pulling) return;
    dist=e.touches[0].clientY-startY;
    if(dist<=DZ || !atTop()){ if(ind){ ind.classList.remove('armed'); var p0=ind.querySelector('.sz-ptr-pill'); if(p0){ p0.style.opacity='0'; p0.style.transform='translateY(0) scale(.85)'; } } if(dist<=0) pulling=false; return; }
    e.preventDefault();
    var pull=dist-DZ;
    var el=mkInd(); el.style.paddingTop=offTop+'px';
    var prog=Math.min(pull/TH,1); var armed=pull>TH;
    var pill=el.querySelector('.sz-ptr-pill'); if(pill){ pill.style.transition='opacity .12s ease,background-color .2s ease'; pill.style.opacity=Math.min(prog*1.6,1); pill.style.transform='translateY('+Math.min(pull*0.45,44)+'px) scale('+(0.85+prog*0.15)+')'; }
    var a=el.querySelector('.sz-ptr-a'); if(a) a.style.transform='rotate('+(armed?180:0)+'deg)';
    var txt=el.querySelector('.sz-ptr-txt'); if(txt) txt.textContent=armed?'Solta para atualizar':'Puxa para atualizar';
    el.classList.toggle('armed', armed);
  }, {passive:false});
  window.addEventListener('touchend', function(){
    if(!pulling) return; pulling=false;
    var pull=dist-DZ;
    if(pull>TH && !busy){
      busy=true;
      var el=mkInd(); el.style.paddingTop=offTop+'px'; el.classList.remove('armed'); el.classList.add('loading');
      var pill=el.querySelector('.sz-ptr-pill'); if(pill){ pill.style.transition='opacity .18s ease,transform .18s ease,background-color .2s ease'; pill.style.opacity='1'; pill.style.transform='translateY(30px) scale(1)'; }
      var txt=el.querySelector('.sz-ptr-txt'); if(txt) txt.textContent='A atualizar…';
      try{ if(navigator.vibrate) navigator.vibrate(22); }catch(e){}
      setTimeout(function(){ try{ location.reload(); }catch(e){ location.href=location.href; } }, 850);
    } else if(ind){ ind.classList.remove('armed'); var pill2=ind.querySelector('.sz-ptr-pill'); if(pill2){ pill2.style.transition='opacity .2s ease,transform .2s ease'; pill2.style.opacity='0'; pill2.style.transform='translateY(0) scale(.85)'; } }
  }, {passive:true});
})();
