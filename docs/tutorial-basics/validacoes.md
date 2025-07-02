---
id: validacoes
title: Validações e Regras
sidebar_position: 6
---

# Validações

O nosso módulo e processo de entregas hoje conta com algumas validações importantes no fluxo.

## Justificativa

Caso uma entrega esteja registrada como DESPACHADO no status e por algum motivo ela voltou para Conferência, Separado ou Pendente vai ser exibida uma tela onde o usuario terá que realizar o preenchimento de uma mensagem informando o motivo pelo qual aquela entrega esta regredindo dentro do processo.  
Essa mesma validação tambem esta presente na tela de edição, então se o usuario trocar o status manualmente sem ser pelo arrastar do dashboard o sistema tambem exibe essa tela de justificativa de igual forma.

![Justificativa](/img/documents/justificativa.png)

## Entrega Ja Existente

Caso o usuário opte por criar uma entrega de forma manual ou via tela de consulta no eVendas, se já existir uma entrega cadastrada para aquela nota, o sistema retorna um aviso informando sobre a tentativa e lhe mostrando o número correto da entrega criada.

![Entrega Já Existente](/img/documents/exists.png)

## Entregador

Como já retratado no ambiente de Movimentação de entregas, ao ser encaminhado para DESPACHADO, o sistema retorna uma tela para que o usuário informe um entregador, impedindo a geração de entregas em transporte sem entregador.

![Entregador](/img/documents/entregador.png)