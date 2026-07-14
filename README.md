# ✅ To-Do List API com Autenticação JWT

API REST desenvolvida em **Node.js** com **Express** e **SQLite**, criada com o objetivo de praticar conceitos fundamentais de desenvolvimento backend.

Este projeto une dois projetos anteriores (CRUD de tarefas e autenticação de usuários), implementando um sistema onde cada usuário possui suas próprias tarefas, protegidas por autenticação utilizando **JSON Web Token (JWT)**.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* SQLite
* bcrypt
* JSON Web Token (JWT)
* dotenv

---

# 📚 Conceitos praticados

* Arquitetura em camadas (Routes → Controllers → Models)
* CRUD completo
* Banco de dados relacional
* Relacionamento entre tabelas (Users → Tasks)
* Autenticação de usuários
* Hash de senhas com bcrypt
* Geração e validação de tokens JWT
* Middleware de autenticação
* Validação de dados
* Organização e modularização do projeto

---

# 📂 Estrutura do projeto

```text
src/
│
├── config/
│   └── jwt.js
│
├── controllers/
│   ├── taskController.js
│   └── userController.js
│
├── database/
│   ├── database.js
│   └── createTables.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   ├── taskModel.js
│   └── userModel.js
│
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
│
├── utils/
│   └── utils.js
│
├── validators/
│   ├── taskValidators.js
│   └── userValidators.js
│
└── server.js
```

---

# 🗄 Banco de dados

O projeto utiliza **SQLite** contendo duas tabelas relacionadas:

## Users

* id
* name
* email
* password
* creation_date

## Tasks

* id
* title
* description
* completed
* creation_date
* completion_date
* user_id (Foreign Key)

Cada tarefa pertence a um único usuário.

---

# 🔐 Autenticação

Após realizar o login, a API gera um **JWT** contendo as informações básicas do usuário.

Esse token deve ser enviado nas rotas protegidas através do cabeçalho:

```http
Authorization: Bearer seu_token_aqui
```

O middleware valida o token antes de permitir o acesso às rotas protegidas.

---

# 📡 Rotas da API

## Usuários

| Método | Rota              | Descrição                               |
| ------ | ----------------- | --------------------------------------- |
| POST   | `/users/register` | Cadastro de usuário                     |
| POST   | `/users/login`    | Login do usuário                        |
| GET    | `/users/me`       | Retorna os dados do usuário autenticado |

---

## Tarefas

| Método | Rota         | Descrição                   |
| ------ | ------------ | --------------------------- |
| GET    | `/tasks`     | Lista as tarefas do usuário |
| GET    | `/tasks/:id` | Busca uma tarefa específica |
| POST   | `/tasks`     | Cria uma nova tarefa        |
| PUT    | `/tasks/:id` | Atualiza uma tarefa         |
| DELETE | `/tasks/:id` | Remove uma tarefa           |

Todas as rotas de tarefas são protegidas por autenticação.

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
JWT_SECRET=sua_chave_secreta
```

Inicie o servidor:

```bash
npm start
```

ou

```bash
node src/server.js
```

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em aprendizado, consolidando conceitos importantes do desenvolvimento backend, como:

* APIs REST
* CRUD
* Organização em camadas
* Banco de dados relacional
* Relacionamento entre tabelas
* Autenticação e autorização com JWT
* Middleware
* Segurança no armazenamento de senhas

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.
