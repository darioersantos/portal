/* Menu lateral partilhado por todas as paginas. Editar AQUI muda a barra em toda a app. */
window.PORTAL_NAV = [
  {group:null, items:[ {k:'__home', ic:'home', nm:'Início', active:true} ]},
  {group:'Operações', items:[
    {k:'lembretes', ic:'list-checks', nm:'Tarefas', badgeId:'nbTar'},
    {k:'mural', ic:'calendar-days', nm:'Calendário', badgeId:'nbLem'},
    {k:'permanencia', ic:'book-open', nm:'Relatório de Permanência'},
    {k:'roturas', ic:'package', nm:'Roturas'},
    {k:'notificacoes', ic:'bell', nm:'Notificações'},
    {k:'contagem', ic:'calculator', nm:'Contagem de Dinheiro', accent2:true},
    {k:'superliga', ic:'trophy', nm:'Super Liga', dark:true},
    {k:'vendas', ic:'bar-chart-3', nm:'Análise de Vendas', accent:true},
    {k:'planeamento', ic:'calendar-days', nm:'Planeamento'}
  ]},
  {group:'Outros', items:[
    {k:'checklists', ic:'clipboard-check', nm:'Checklist Abertura/Fecho'},
    {k:'limpeza', ic:'clipboard-list', nm:'Checklist de Loja'},
    {k:'incidencias', ic:'siren', nm:'Incidências de Manutenção'},
    {k:'notas', ic:'square-pen', nm:'Bloco de Notas'},
    {k:'consumiveis', ic:'shopping-bag', nm:'Encomendas'},
    {k:'atas', ic:'file-text', nm:'Reuniões'},
    {k:'pontualidade', ic:'calendar-days', nm:'Atrasos e Faltas'},
    {k:'caderno', ic:'book-open', nm:'Caderno de Acompanhamento'},
    {k:'competencias', ic:'bar-chart-3', nm:'Mapa de Competências'}
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
    {k:'aniversario', ic:'cake', nm:'Aniversário'},
    {k:'limitacoes_horario', ic:'clock', nm:'Limitações de Horário'},
    {k:'satisfacao_staff', ic:'smile', nm:'Satisfação Staff'},
    {k:'ferias', ic:'umbrella', nm:'Pedido de Férias'},
    {k:'folgas', ic:'calendar-clock', nm:'Pedido de Trocas e Folgas'}
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

/* ==== leitura mais rapida: pedir os dados sem a "bagagem" pesada (light) ====
   As paginas de Formacao/Vendas/Planeamento precisam das seccoes grandes
   (_pfhist / _vendas / _vendasHist / _plan). TODAS as outras paginas passam a
   pedir "?action=notas&light=1" para o backend devolver tudo MENOS essas seccoes
   (na Google Sheets o _pfhist sozinho sao ~3,7 MB). Retrocompativel: se o backend
   ainda nao souber do parametro, ignora-o e devolve tudo na mesma. */
(function(){
  try{
    var HEAVY=/(vendas-web|planeamento|atendimento_cliente|entrada|onlines|palmilhas|provadores|sprays|szclub)\.html/i;
    if(HEAVY.test(location.pathname||'')) return;
    var of=window.fetch; if(typeof of!=='function') return;
    window.fetch=function(input, init){
      try{
        if(typeof input==='string' && input.indexOf('action=notas')>=0 && input.indexOf('light=')<0){
          var mth=(init&&init.method)?String(init.method).toUpperCase():'GET';
          if(mth==='GET'){ input += (input.indexOf('?')>=0?'&':'?')+'light=1'; }
        }
      }catch(e){}
      return of.call(this, input, init);
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
  #sz-ptr{position:fixed;top:0;left:0;right:0;display:flex;align-items:flex-end;justify-content:center;height:0;overflow:visible;z-index:9999;pointer-events:none;}
  #sz-ptr .sz-ptr-badge{margin-bottom:10px;width:44px;height:44px;border-radius:50%;background:#fff;box-shadow:0 8px 24px rgba(20,24,30,.22);display:flex;align-items:center;justify-content:center;transform:scale(.5);transition:background-color .2s ease;}
  #sz-ptr .sz-ptr-a{width:22px;height:22px;stroke:#FF8100;stroke-width:2.6;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:transform .15s ease,stroke .2s ease;}
  #sz-ptr .sz-ptr-ring{display:none;width:22px;height:22px;border:3px solid #FF8100;border-top-color:transparent;border-radius:50%;}
  #sz-ptr.armed .sz-ptr-badge{background:#eafaf1;}
  #sz-ptr.armed .sz-ptr-a{stroke:#16a34a;}
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

/* ==== Puxar para atualizar (pull-to-refresh) - PWA + browser mobile ==== */
(function(){
  if(!('ontouchstart' in window)) return;
  var TH=115, DZ=14, startY=0, pulling=false, dist=0, ind=null, busy=false;
  function mkInd(){
    if(ind) return ind;
    ind=document.createElement('div'); ind.id='sz-ptr';
    ind.innerHTML='<div class="sz-ptr-badge"><svg class="sz-ptr-a" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></svg><span class="sz-ptr-ring"></span></div>';
    document.body.appendChild(ind); return ind;
  }
  function fixedAncestor(el){ while(el && el!==document.body){ try{ var p=getComputedStyle(el).position; if((p==='fixed'||p==='sticky') && (!el.className || String(el.className).indexOf('topbar')<0)) return true; }catch(e){} el=el.parentElement; } return false; }
  function atTop(){ var se=document.scrollingElement||document.documentElement; return (window.pageYOffset||se.scrollTop||0)<=0; }
  window.addEventListener('touchstart', function(e){
    if(busy || e.touches.length!==1 || !atTop() || fixedAncestor(e.target)){ pulling=false; return; }
    startY=e.touches[0].clientY; pulling=true; dist=0;
  }, {passive:true});
  window.addEventListener('touchmove', function(e){
    if(!pulling) return;
    dist=e.touches[0].clientY-startY;
    if(dist<=DZ || !atTop()){ if(ind){ ind.style.height='0'; ind.classList.remove('armed'); } if(dist<=0) pulling=false; return; }
    e.preventDefault();
    var pull=dist-DZ;
    var el=mkInd(); el.style.transition='none'; el.style.height=Math.min(pull*0.5,96)+'px';
    var prog=Math.min(pull/TH,1);
    var badge=el.querySelector('.sz-ptr-badge'); if(badge) badge.style.transform='scale('+(0.5+prog*0.5)+')';
    var a=el.querySelector('.sz-ptr-a'); if(a) a.style.transform='rotate('+(prog*180)+'deg)';
    el.classList.toggle('armed', pull>TH);
  }, {passive:false});
  window.addEventListener('touchend', function(){
    if(!pulling) return; pulling=false;
    var pull=dist-DZ;
    if(pull>TH && !busy){
      busy=true;
      var el=mkInd(); el.classList.remove('armed'); el.classList.add('loading');
      el.style.transition='height .18s ease'; el.style.height='64px';
      var badge=el.querySelector('.sz-ptr-badge'); if(badge) badge.style.transform='scale(1)';
      try{ if(navigator.vibrate) navigator.vibrate(25); }catch(e){}
      setTimeout(function(){ try{ location.reload(); }catch(e){ location.href=location.href; } }, 900);
    } else if(ind){ ind.style.transition='height .2s ease'; ind.style.height='0'; ind.classList.remove('armed'); }
  }, {passive:true});
})();
