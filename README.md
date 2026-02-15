# API RESTful - Barbearia Los Barbeiros
  Este projeto é uma API RESTful feita em Node.js com Express e conectada ao banco MySQL.
  Ela permite cadastrar, listar, atualizar e excluir clientes, barbeiros e agendamentos.


## Objetivo do Projeto :
  O objetivo é praticar o desenvolvimento de uma API REST usando Node.js e Express.
  O projeto treina CRUD, rotas, conexão com banco e testes no Postman.


## Tecnologias Usadas :

```bash

Tecnologia :                      Função no projeto :
  Node.js                           Executa o backend da API
  Express                           Cria rotas, endpoints e controla requisições
  MySQL                             Armazena os dados (clientes, barbeiros e agenda)
  Postman                           Testa os endpoints da API

```

## Organização do Projeto :
O projeto foi separado em pastas para facilitar a leitura e manutenção do código.

```bash

Pasta/Arquivo :                   Para que serve :
  /config/db.js                     Faz a conexão com o banco MySQL
  /routes/clientes.js               Rotas e CRUD dos clientes
  /routes/barbeiros.js              Rotas e CRUD dos barbeiros
  /routes/agenda.js                 Rotas e CRUD dos agendamentos
  server.js                         Arquivo principal que inicia o servidor

```

## Como Rodar o Projeto :
### 1) Instalar dependências ➝
Esse comando instala tudo que o projeto precisa para funcionar.

```bash

npm install

```

### 2) Rodar o servidor ➝
Esse comando liga a API para você testar no Postman.

```bash

npm start

```

## URL Base da API :
A API roda na seguinte URL ➝

```bash

http://localhost:3001

```

## Tabelas do Banco de Dados :
O projeto utiliza as seguintes tabelas no MySQL ➝

```bash

Tabela :                           O que armazena :
  cliente                            Dados dos clientes
  barbeiros                          Dados dos barbeiros
  agenda                             Agendamentos feitos

```

## Endpoints - CLIENTES :
Essas rotas são responsáveis por cadastrar e gerenciar clientes ➝

```bash

Método :               Endpoint :                     O que faz :
  GET                    /clientes                      Lista todos os clientes cadastrados
  GET                    /clientes/:id                  Busca um cliente pelo ID
  GET                    /clientes/nome/:nome           Busca um cliente pelo Nome
  POST                   /clientes                      Cria um novo cliente
  PUT                    /clientes/:id                  Atualiza todos os dados do cliente
  PATCH                  /clientes/updateNome/:id       Atualiza somente o Nome
  PATCH                  /clientes/updateEmail/:id      Atualiza somente o Email
  PATCH                  /clientes/updateTelefone/:id   Atualiza somente o Telefone
  DELETE                 /clientes/:id                  Exclui um cliente pelo ID

```

```bash

## Exemplo de JSON - Criar Cliente (POST)
{
  "Nome": "João Silva",
  "Email": "joao@email.com",
  "Telefone": "11999999999"
}

```

## Endpoints - BARBEIROS :
Essas rotas são responsáveis por cadastrar e gerenciar barbeiros ➝

```bash

Método :              Endpoint :                           O que faz :
  GET                  /barbeiros                            Lista todos os barbeiros cadastrados
  GET                  /barbeiros/:id                        Busca um barbeiro pelo ID
  GET                  /barbeiros/nome/:nome                 Busca um barbeiro pelo Nome
  POST                 /barbeiros                            Cria um novo barbeiro
  PUT                  /barbeiros/:id                        Atualiza todos os dados do barbeiro
  PATCH                /barbeiros/updateNome/:id             Atualiza somente o Nome
  PATCH                /barbeiros/updateEmail/:id            Atualiza somente o Email
  PATCH                /barbeiros/updateTelefone/:id         Atualiza somente o Telefone
  DELETE               /barbeiros/:id                        Exclui um barbeiro pelo ID
  DELETE               /barbeiros/nome/:nome                 Exclui um barbeiro pelo Nome

```

```bash

## Exemplo de JSON - Criar Barbeiro (POST)
{
  "CPF": "12345678901",
  "Nome": "Carlos Barbeiro",
  "Email": "carlos@barbearia.com",
  "Telefone": "11999990000"
}

```

## Endpoints - AGENDA (AGENDAMENTOS) :
Essas rotas controlam os agendamentos entre clientes e barbeiros ➝

```bash

Método :          Endpoint :                O que faz :
  GET               /agenda                   Lista todos os agendamentos cadastrados
  GET               /agenda/:id               Busca um agendamento pelo ID
  POST              /agenda                   Cria um novo agendamento
  PUT               /agenda/:id               Atualiza os dados do agendamento
  DELETE            /agenda/:id               Exclui um agendamento pelo ID

```

```bash

## Exemplo de JSON - Criar Agendamento (POST)
{
  "Data_agendamento": "2026-02-15",
  "Hora": "14:30:00",
  "Servico": "Corte + Barba",
  "Status_agendamento": "ativo",
  "id_cliente": 1,
  "CPF_barbeiro": "12345678901"
}

```

## Testes no Postman :
O Postman foi usado para testar todas as rotas da API.
Para POST/PUT/PATCH, é necessário enviar os dados em Body > raw > JSON.

## Validações implementadas :
O projeto possui validações simples para evitar erros comuns.

```bash

Campo :                 Regra :
  Nome                   obrigatório e até 50 caracteres
  Email                  até 50 caracteres
  Telefone               até 11 caracteres
  CPF                    até 11 caracteres

```


## Observações Importantes
Para excluir clientes ou barbeiros, pode ser necessário excluir agendamentos antes;


A API retorna mensagens em JSON e usa status HTTP corretos (200, 201, 404, 500);


A estrutura do projeto está separada por rotas para facilitar a organização.

#### Autor ➝
Projeto desenvolvido por: Deryck, Luan e Lucas

