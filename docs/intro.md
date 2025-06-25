---
sidebar_position: 1
---

# Tutorial Introdução

Vamos descobrir como usar o eEntrega em menos de 5 minutos.

## Começando

Para começar, vamos realizar a apresentação das configurações no seu módulo Admin.

### Configurações Administrativas - Entregas

- Gerar entregas via eVendas.

- Delimitação de Prazos

- Gerenciamento de Impressões

## Envio de Entregas no Caixa

É possível realizar o envio das entregas diretamente do eVendas, ou seja, caso o usuário faça uma venda, ele já pode enviar a entrega para o aplicativo sem precisar criar ela do zero no **eEntrega**.

Para isso, o usuário precisa estar com a função Usar Entrega habilitada nas suas **Configurações Administrativas**, essa função faz com que seja exibida ou não a mensagem que pergunta ao usuário sobre gerar ou não a entrega.

## Controle de Prazos

Basicamente, permite ao usuário definir previamente os prazos, de forma que esse controle fica automatizado. Sempre que uma entrega atinge determinado prazo, o sistema a marca com um aviso visual integrado ao card no **Dashboard**.

Dentre essas funções o sistema fornece a possibilidade de controlar o

- Prazo Padrão (Dias)
- Prazo Médio (Dias)
- Prazo Limite (Dias)

### Prazo Padrão

**Função:** Define o número de dias padrão para o vencimento de uma nova entrega. O sistema calcula automaticamente a data de vencimento somando este valor à data de criação da entrega.

**Exemplo Prático:** Se hoje é 10/06/2025 e você define o prazo padrão como 10 dias, toda nova entrega será criada, por padrão, com a data de vencimento para 20/06/2025.

### Prazo Médio

**Função:** Configura um alerta visual de "Atenção" para entregas que estão se aproximando da data de vencimento. Um indicador visual (um círculo amarelo) será exibido no card da entrega quando o número de dias restantes for igual ou inferior ao valor definido aqui.

**Exemplo Prático:** Considerando a entrega que vence em 20/06/2025, se você configurar o Prazo Médio como 5 dias, o alerta amarelo aparecerá no card a partir do dia 15/06/2025.

### Prazo Limite

**Função:** Configura um alerta visual "Crítico" para entregas muito próximas do vencimento. O indicador visual do card se tornará LARANJA, destacando a urgência na finalização da entrega.

**Exemplo Prático:** Ainda usando a entrega que vence em 20/06/2025, se você configurar o Prazo Limite como 2 dias, o card da entrega ficará laranja a partir do dia 18/06/2025.

import PrazoCarousel from '@site/src/components/PrazoCarousel';

<PrazoCarousel />

## Gerencie Suas Impressões

Dentro das configurações administrativas, é possível definir se a impressão da entrega será registrada em formato de **48 COLUNAS (CUPOM**) ou **96 COLUNAS (A4)**.

A impressão da entrega conta com as informações necessárias para que a entrega seja feita com precisão, desde nome de participante, endereço e produtos a serem entregues.

import ImpressaoCarousel from '@site/src/components/ImpressaoCarousel';

<ImpressaoCarousel />