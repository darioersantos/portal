/* Menu lateral partilhado por todas as paginas. Editar AQUI muda a barra em toda a app. */
window.PORTAL_NAV = [
  {group:null, items:[ {k:'__home', ic:'home', nm:'Início', active:true} ]},
  {group:'Operações', items:[
    {k:'lembretes', ic:'list-checks', nm:'Tarefas', badgeId:'nbTar'},
    {k:'mural', ic:'message-circle', nm:'Lembretes', badgeId:'nbLem'},
    {k:'notas', ic:'square-pen', nm:'Bloco de Notas'},
    {k:'incidencias', ic:'siren', nm:'Registo de Incidências'},
    {k:'permanencia', ic:'book-open', nm:'Relatório de Permanência'},
    {k:'roturas', ic:'package', nm:'Roturas'},
    {k:'notificacoes', ic:'bell', nm:'Notificações'},
    {k:'contagem', ic:'calculator', nm:'Contagem de Dinheiro', accent2:true},
    {k:'vendas', ic:'bar-chart-3', nm:'Análise de Vendas', accent:true},
    {k:'planeamento', ic:'calendar-days', nm:'Planeamento'},
    {k:'superliga', ic:'trophy', nm:'Super Liga', dark:true}
  ]},
  {group:'Outros', items:[
    {k:'checklists', ic:'clipboard-check', nm:'Checklist Abertura/Fecho'},
    {k:'limpeza', ic:'clipboard-list', nm:'Checklist de Loja'},
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
