---
sidebar_position: 1
---

# Criação de Entregas

Com a nova funcionalidade em mãos, agora conseguimos gerar entrega de diferentes formas, tudo isso pode ser feito tanto pelo eEntrega como pelo eVendas.

## eEntrega

Dentro do nosso aplicativo de controle de entregas, o usuário pode realizar a criação de uma entrega interagindo com o botão de + dentro da plataforma.

![Add](/img/documents/add-entrada.png)

Uma vez que o usuário clicar no botão, o sistema abrirá um menu para selecionar a nota fiscal (NFCe) atrelada à entrega desejada.

Vão existir diversos filtros nesse menu para facilitar a busca pela nota desejada.

*Observação: Vale salientar que é possível realizar entregas para vendas feitas em dias anteriores, não existe nada que obrigue o usuário a realizar entregas apenas nos dias atuais.*

Agora que selecionamos a nota, será exibido um menu onde vão ser preenchidas as informações do participante que receberá a entrega.

Preencheremos então: 

- **CPF/CNPJ**

- **Nome do Participante**

- **Endereço, Rua, Número, Bairro e Cidade.**

- **Contato (WhatsApp)**

- **Ponto de Referência**

- **Observação.**

- **Entregador (Opcional)**

![Entrega](/img/documents/cadastro.png)

*Observação: Caso seja adicionado um participante na NFCe no ato da venda, ao resgatar essa Nota na entrega, o sistema já preencherá por padrão o Nome do participante, CPF/CNPJ, Endereço e Contato (Caso o usuário tenha um WhatsApp cadastrado) e, caso exista uma configuração de Prazo Padrão cadastrado, ao abrir a tela de preenchimento, a data em dias configurada já será preenchida.*

## eVendas

Dentro do eVendas, caso o usuário esteja utilizando a função **Usar eEntrega**, ao finalizar a venda será exibida uma mensagem perguntando se deseja ou não gerar a entrega.

![Evendas](/img/documents/valid-evendas.png)

    - **Se sim:** O usuário preencherá as mesmas informações na mesma tela que a exibida no módulo eEntrega, com todas as mesmas validações.

    - **Se não:** Venda finalizada normalmente sem a geração da entrega.

Caso o usuário opte por não gerar a entrega, mas por algum motivo agora ele deseja criar uma, ele pode ir até o menu de consulta de vendas, selecionar a nota manualmente e interagir com o botão de **Manutenção**.

![Manutencao](/img/documents/manutencao.png)

Dessa forma, o sistema recupera a nota que está selecionada no grid e, via tela de manutenção, faz a criação da entrega novamente.

## Edição

As edições podem ser realziadas normalmente exclusivamente do modulo **eEntrega**, não sendo possivel realizar esse tipo de alteração no eVendas. 

Caso o usuário opte por realizar essa edição, ela pode ser feita apenas dando um duplo clique no card que representa a entrega ou pelo nosso menu de movimentação de entregas gerencial, interagindo com o Editar Entrega.