# todo-api

[![Greenkeeper badge](https://badges.greenkeeper.io/dleitee/todo-api.svg)](https://greenkeeper.io/)

Exemplo de api restful utilizando modelo de autenticação básica.

## Executar em localhost

Tenha instalado o [Node.js](http://nodejs.org/) e o [MongoDB](https://www.mongodb.org)

Inicie o serviço de banco de dados:

```sh
$ mongod
```

Execute a aplicação:

```sh
$ git clone https://github.com/dleitee/todo-api.git
$ cd todo-api
$ npm install
$ npm start
```

Node app is running at localhost: [localhost:5000](http://localhost:5000/).

## API

Utilize a ferramenta [Postman](http://www.getpostman.com/) para executar os testes.

***

###[/users](http://localhost:5000/api/users)

#####POST - Cadastra um novo usuário com os parâmetros
- username
- password

#####GET - Retorna todos os usuários habilitados (*)
<br>
_(*) Necessita autenticação_
***

###[/todos](http://localhost:5000/api/todos)

#####POST - Cadastra uma nova tarefa com os parâmetros (*)
- task

#####GET - Retorna todas as tarefas cadastradas (*)
<br>
_(*) Necessita autenticação_
***

###[/todos/:todo_id](http://localhost:5000/api/todos/:todo_id)

#####GET - Retorna a tarefa indicada em :todo_id (*)
<br>
#####PUT - Edita a tarefa indicada em :todo_id com o parâmetro: (*)
- task

#####DELETE - Deleta a tarefa indicada em :todo_id (*)
<br>
_(*) Necessita autenticação_
***


###License

MIT