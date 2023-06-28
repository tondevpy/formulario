# formulario

Esse script é escrito em JavaScript e contém funcionalidades de manipulação do DOM (Document Object Model) para criar um formulário de cadastro em uma página HTML. Vou descrever as principais partes do script:

Primeiro, o código define uma variável btnAction que armazena a referência para o elemento HTML com o ID "btnAction". Essa referência é obtida usando o método getElementById do objeto document.
Em seguida, é definida uma variável valor inicializada com o valor 0.
O código adiciona um ouvinte de evento ao botão de ação (btnAction) usando o método addEventListener. Esse ouvinte é acionado quando o botão é clicado.
Dentro do ouvinte de evento, há uma condição que verifica se valor é igual a 0.
Se a condição for verdadeira, o código cria elementos HTML dinamicamente para construir o formulário de cadastro. Esses elementos incluem um título de "Cadastro" (h1), campos de entrada de texto para nome e sobrenome (input), campos de entrada numérica para dia, mês e ano de nascimento (input type="number"), e um botão de envio (button).
Além disso, o código aplica estilos aos elementos criados e adiciona-os como filhos do elemento HTML com o ID "containerSection".
A variável valor é atualizada para 1 para indicar que o formulário foi aberto.
Se a condição na etapa 4 for falsa, ou seja, se valor for diferente de 0, um alerta é exibido informando que o formulário já foi aberto e não é possível abrir outro.
O código também adiciona um ouvinte de evento ao documento (document) para capturar cliques em qualquer lugar da página.
Dentro desse ouvinte de evento, é verificado se o evento de clique ocorreu no botão de envio (btnEnviar).
Se o evento de clique foi acionado pelo botão de envio, o código recupera os valores preenchidos nos campos de entrada (nome, sobrenome, nascimentoDia, nascimentoMes, nascimentoAno).
Em seguida, há uma verificação para garantir que todos os campos tenham sido preenchidos. Se algum campo estiver vazio, é exibido um alerta solicitando que todos os campos sejam preenchidos.
Se todos os campos foram preenchidos, é exibido um alerta informando que o formulário foi enviado com sucesso. Os valores dos campos são limpos, redefinindo-os para vazio.
O script permite que o formulário seja aberto apenas uma vez. Se o usuário clicar novamente no botão de ação, será exibido um alerta informando que o formulário já foi aberto e não é possível abrir outro.
Em resumo, esse script cria um formulário de cadastro dinamicamente quando o botão de ação é clicado e realiza validações simples ao enviar o formulário.
