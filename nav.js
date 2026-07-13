/* Menu lateral partilhado por todas as paginas. Editar AQUI muda a barra em toda a app. */
window.PORTAL_NAV = [
  {group:null, items:[ {k:'__home', ic:'home', nm:'Início', active:true} ]},
  {group:'Operações', items:[
    {k:'lembretes', ic:'list-checks', nm:'Tarefas', badgeId:'nbTar'},
    {k:'mural', ic:'calendar-days', nm:'Calendário', badgeId:'nbLem'},
    {k:'incidencias', ic:'siren', nm:'Incidências de Manutenção'},
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

/* ==== ajustes globais partilhados (todas as paginas que carregam o nav.js) ==== */
(function(){
  /* 1) selects (catalogos) uniformes: caixa personalizada igual aos inputs/data */
  var css='.field select, select[data-staff]{-webkit-appearance:none !important;appearance:none !important;width:100%;box-sizing:border-box;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center;padding-right:38px;}';
  try{ var s=document.createElement('style'); s.textContent=css; (document.head||document.documentElement).appendChild(s); }catch(e){}
  /* 2) manter a posicao de scroll do menu lateral entre paginas */
  document.addEventListener('DOMContentLoaded', function(){
    var nav=document.getElementById('sbNav'); if(!nav) return;
    try{ var y=sessionStorage.getItem('sz_navscroll'); if(y!=null) nav.scrollTop=parseInt(y,10)||0; }catch(e){}
    nav.addEventListener('scroll', function(){ try{ sessionStorage.setItem('sz_navscroll', nav.scrollTop); }catch(e){} }, {passive:true});
  });
})();

/* ==== Puxar para atualizar (pull-to-refresh) - PWA + browser mobile ==== */
(function(){
  if(!('ontouchstart' in window)) return;
  var TH=72, startY=0, pulling=false, dist=0, ind=null;
  function mkInd(){
    if(ind) return ind;
    ind=document.createElement('div'); ind.id='sz-ptr';
    ind.style.cssText='position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:center;height:0;overflow:hidden;z-index:9999;pointer-events:none;background:transparent;';
    ind.innerHTML='<div style="display:flex;align-items:center;gap:8px;color:#FF8100;font:800 13px -apple-system,BlinkMacSystemFont,sans-serif;"><svg class="sz-ptr-a" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg><span class="sz-ptr-t">Puxa para atualizar</span></div>';
    document.body.appendChild(ind); return ind;
  }
  function fixedAncestor(el){ while(el && el!==document.body){ try{ var p=getComputedStyle(el).position; if((p==='fixed'||p==='sticky') && el.className && String(el.className).indexOf('topbar')<0) return true; }catch(e){} el=el.parentElement; } return false; }
  function atTop(){ var se=document.scrollingElement||document.documentElement; return (window.pageYOffset||se.scrollTop||0)<=0; }
  window.addEventListener('touchstart', function(e){
    if(e.touches.length!==1 || !atTop() || fixedAncestor(e.target)){ pulling=false; return; }
    startY=e.touches[0].clientY; pulling=true; dist=0;
  }, {passive:true});
  window.addEventListener('touchmove', function(e){
    if(!pulling) return;
    dist=e.touches[0].clientY-startY;
    if(dist<=0 || !atTop()){ pulling=false; if(ind) ind.style.height='0'; return; }
    e.preventDefault();
    var el=mkInd(); el.style.transition='none'; el.style.height=Math.min(dist*0.5,90)+'px';
    var a=el.querySelector('.sz-ptr-a'); if(a) a.style.transform='rotate('+Math.min(dist*2,360)+'deg)';
    var t=el.querySelector('.sz-ptr-t'); if(t) t.textContent=(dist>TH)?'Solta para atualizar':'Puxa para atualizar';
  }, {passive:false});
  window.addEventListener('touchend', function(){
    if(!pulling) return; pulling=false;
    if(dist>TH){
      var el=mkInd(); el.style.transition='height .15s'; el.style.height='54px';
      var t=el.querySelector('.sz-ptr-t'); if(t) t.textContent='A atualizar…';
      var a=el.querySelector('.sz-ptr-a'); if(a){ a.style.transform=''; a.style.animation='sz-ptr-spin .7s linear infinite'; }
      setTimeout(function(){ try{ location.reload(); }catch(e){ location.href=location.href; } }, 200);
    } else if(ind){ ind.style.transition='height .18s'; ind.style.height='0'; }
  }, {passive:true});
  try{ var st=document.createElement('style'); st.textContent='@keyframes sz-ptr-spin{to{transform:rotate(360deg)}}'; (document.head||document.documentElement).appendChild(st); }catch(e){}
})();
