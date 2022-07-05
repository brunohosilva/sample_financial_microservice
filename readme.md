# Projeto MBA FIAP - Microservices

Projeto de estudo sobre microservices e API's

## Installation

Necessário [Node.js](https://nodejs.org/) para rodar o projeto

Instale as dependencias do projeto:

```sh
cd sample_financial_microservice/Clientes/
npm i
```

```sh
cd sample_financial_microservice/Usuarios/
npm i
```

## Rodando o Projeto

```sh
cd Usuarios
nodemon src/index.js
```

```sh
cd Cliente
nodemon src/index.js
```

## SERVIÇO DE USUARIO

O serviço de Usuário irá rodar na porta: http://localhost:3000
Com os seguintes endpoints:

```sh
GET /
* Listando todos os usuários cadastrados

POST /cadastro
* Realizar um novo cadastro de usuário
* Parâmetro no body:
{
  	"nomeusuario": "nome usuario",
	"email": "email",
	"senha": "senha",
  	"nomecompleto": "nome completo",
	"telefone": "telefone"
}

POST /login
* Parâmetro no body:
{
	"nomeusuario": "nome usuario",
	"senha": "senha"
}
POST /atualizar/:id
* Parâmetro na url passando o ID
* Parâmetro no body:
{
  	"nomeusuario": "atualizar nome usuario",
	"email": "atualizar email",
	"senha": "atualizar senha",
  	"nomecompleto": "atualizar nome completo",
	"telefone": "atualizar telefone"
}

POST /apagar/:id
* Parâmetro na url passando o ID
```

## SERVIÇO DE CLIENTE

O serviço de Cliente irá rodar na porta: http://localhost:4000
Com os seguintes endpoints:

```sh
GET /
Listando todos os clientes cadastrados
* Passando o token no header como parametro

POST /cadastro
* Realizar um novo cadastro de cliente
* Passando o token gerado no login no header como parametro
* Parâmetro no body:
{
	"nome_banco": "nome banco",
	"tipo_conta": "tipo conta",
	"nome_titular": "nome titular",
	"limite_cartao": "limite cartao",
	"apikey": "api key gerado no login"
}

POST /atualizar/:id
* Passando o token gerado no login no header como parametro e o ID na url
* Parâmetro no body:
{
	"nome_banco": "atualizar nome banco",
	"tipo_conta": "atualizar tipo conta",
	"nome_titular": "atualizar nome titular",
	"limite_cartao": "atualizar limite cartao",
}

POST /apagar/:id
* Passando o token gerado no login no header como parametro e o ID na url
```
