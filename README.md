
# SISTEMA DE RIFA E SORTEIO

Esse sistema basico, faz um sorteio de numeros aleatoriamente, trazendo os dados do participante.
O código em questão é uma aplicação web que cria botões numerados para uma rifa ou sorteio. Ele permite cadastrar números e consultar se um número específico está cadastrado na na base de dados.
## Stack e framework utilizadas



| ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) | ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) |
| --- | --- | --- | --- |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) | |

Sistema utiliza o framework Spring Boot e a linguagem de programação Java, seguindo o modelo de desenvolvimento de API Restful.

Para o armazenamento de dados, foi utilizado o PostgreSQL, utilizando SQL básico para a manipulação dos dados.

No Front-End, foram utilizadas as tecnologias HTML, CSS e JavaScript. O framework Bootstrap também foi empregado para criar um design mais moderno e responsivo. O JavaScript foi utilizado para manipular a lógica do Front-End e a interação com o usuário.

A estrutura das páginas foi desenvolvida utilizando HTML e CSS puro, sem a utilização de frameworks adicionais para otimização do código. O uso do Bootstrap ajudou a proporcionar um visual mais agradável e organizado.

## Por dentro do codigo

| ![Imagem 1](https://i.imgur.com/LJRZOo9.png) | ![Imagem 2](https://i.imgur.com/SJ3jSI5.png) |
| --- | --- |


A arquitetura do backend segue os princípios de uma API Restful, garantindo uma estrutura consistente e padronizada para comunicação com o front-end. Foram utilizados os métodos HTTP adequados para cada operação (GET, POST, PUT, DELETE) e os retornos de resposta seguem os códigos de status apropriados.

Foi utilizado o Lombok, uma biblioteca do Java que reduz a verbosidade do código, eliminando a necessidade de escrever repetidamente getters, setters, construtores e outros métodos auxiliares. Isso torna o código mais limpo e legível, facilitando sua compreensão e manutenção.

Foram criadas classes e métodos específicos para o tratamento de erros e exceções no sistema. Isso ajuda a centralizar e padronizar o tratamento de erros, tornando-o mais consistente em todo o código. Além disso, a utilização de exceções personalizadas permite uma identificação mais precisa dos erros e uma resposta adequada aos clientes da API.

O código foi organizado de forma lógica e estruturada, seguindo boas práticas de programação. Foram utilizadas convenções de nomenclatura significativas, comentários explicativos e espaçamentos adequados para melhorar a legibilidade do código. Isso facilita a compreensão e manutenção do sistema, mesmo para desenvolvedores que não estejam familiarizados com o código.
## Telas e visuais, simples e funcional


| ![Imagem 1](https://i.imgur.com/Fm3G0Tt.png) | ![Imagem 2](https://i.imgur.com/ULPP4r5.png) |
| :------------------------------------------: | :------------------------------------------: |


Botão "CONSULTAR TODOS": Um botão com a classe consultar-button que permite aos usuários consultar todos os números cadastrados.

Botões numerados: A página exibe uma sequência de botões numerados de 1 a 100. Esses botões são criados dinamicamente pela função createNumberButtons(). Cada botão representa um número disponível para ser consultado ou cadastrado.

Cores dos botões: Os botões numerados possuem diferentes cores, dependendo do seu estado. Botões com números já cadastrados possuem a classe btn-success e são exibidos na cor verde. Botões disponíveis para cadastro têm a classe btn-white e são exibidos na cor cinza.

Abrir popup: Ao clicar em um botão numerado, a função abrirPopup é acionada. Essa função abre um popup com base no número do botão e na ação especificada. Se o número já estiver cadastrado, o popup exibirá a página "consultar.html". Caso contrário, abrirá a página "cadastrar.html".

Botão "SORTEAR": Ao clicar nesse botão, um popup é aberto exibindo a página "sortear.html". O popup realiza uma solicitação GET para obter um número aleatório que corresponde aos dados do vencedor, que são exibidos na tela. Para criar um suspense durante o sorteio, a página exibe uma tela de carregamento por 5 segundos antes de exibir os dados.

Verificação de bloqueador de pop-ups: Antes de abrir um popup, é feita uma verificação para detectar se o bloqueador de pop-ups está ativado no navegador do usuário. Se estiver ativado, uma mensagem de alerta é exibida solicitando que o usuário desative-o para permitir a abertura do popup.


| ![Imagem 1](https://i.imgur.com/27BAibF.png) | ![Imagem 2](https://i.imgur.com/jb5DhaH.png) |
| :------------------------------------------: | :------------------------------------------: |
|               O sitema tambem permite uma busca personalizada por nome utilizando o JPA           |             Tela de sorteio          |








## Considerações finais e intuido do codigo

Em resumo, este projeto busca proporcionar uma solução simples e funcional, mantendo a praticidade e evitando erros, permitindo que você construa uma página eficiente e amigável aos usuários. Obtive um grande aprendizado fazendo esse projeto e aprimorei os meus conhecimentos.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/DenilsonFerreira7)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/denilson-ferreira-dos-santos-2a994b215/)


