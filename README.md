# Formulário Crud

## Descrição

Este projeto é uma solução desenvolvida pela empresa de criação de software para atender a um pedido de criação de vários formulários em diversos ramos. A solução inclui um backend que permite o cadastro dos formulários em um banco de dados no formato JSON. Além disso, a solução oferece uma página de login para verificar se os dados do usuário e o cadastro foram criados com sucesso. Também é possível acessar a página de acordo com o ramo do site do formulário pelo login do admin.

## Funcionalidades

O projeto oferece as seguintes funcionalidades:

1. Cadastro:
   - É possível preencher um formulário com no mínimo 8 inputs para realizar o cadastro.
   - Os dados inseridos no formulário são armazenados em um banco de dados no formato JSON.

2. Tela de Login:
   - Permite verificar se o cadastro de dados e usuário foi criado com sucesso.
   - É possível autenticar-se na página utilizando as informações de login fornecidas durante o cadastro.

3. Daily - Apresentação:
   - Implementa os métodos HTTP POST, GET, PUT e DELETE.
   - Fornece as operações básicas do CRUD (Create, Read, Update e Delete).
   - Permite cadastrar, recuperar, atualizar e excluir informações relacionadas à apresentação diária.
   - Somente pelo login de admin.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- Node.js: Servidor utilizado para rodar a aplicação.
- Banco de dados JSON: Armazenamento dos dados dos formulários.
- HTML, CSS e JavaScript: Tecnologias utilizadas para construir a interface com o usuário final.

## Configuração

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório para o seu ambiente local.

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

3. Acesse o diretório do projeto.

   ```
   cd nome-do-repositorio
   ```

4. Instale as dependências do projeto.

   ```
   npm install
   ```

5. Inicie o servidor Node.js.

   ```
   npm start
   ```

6. Abra o navegador e acesse a seguinte URL: `http://localhost:3000`.

7. Para visualizar os dados JSON pelo navegador acrescente /pessoas ou /admins no final do link `http://localhost:3000`.



## Contribuição

As contribuições para este projeto são bem-vindas. Sinta-se à vontade para enviar pull requests ou relatar problemas encontrados.

## Autores

- Lucas Alencar(https://github.com/LucasAlencar0))


## Licença

Este projeto está licenciado sob a [Licença XYZ](https://github.com/LucasALencar0/CRUD/blob/main/LICENSE).

## Link
https://crud-lucasdamazio09.b4a.run/
