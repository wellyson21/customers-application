# Api de registro de clientes com autentificação e frontend simples angular

## Tecnologias
-- Backend: Nodejs
-- Frontend: Angular

## Informações de Execução

### Crie um banco de dados após isso
#### Dentro o projeto back-end edite o arquivo Database.ts com as informações do banco de dados

### Execulte o back-end
    - npm run start
### Execulte o front-end
    - ng serve



## API

Método  | Rota    | Descrição
------- | --------  | ---------------
POST          | /users/login/        | Realiza o login de usuários
POST          | /users/refreshtoken        | Realiza Atualização de token
GET           | /users     | Obtêm todos os clientes
GET          | /users/{id}         | Obtêm um usuario espefifico pelo ID
POST          | /users/        | Registra um novo usuário
PUT          | /users/{id}         | Realiza a atualização de usuários existentes
DELETE       |  /users/{id}        | Remove um usuario espefifico pelo ID
GET           | /customers     | Obtêm todos os clientes
GET          | /customers/{id}         | Obtêm um cliente espefifico pelo ID
POST          | /customers/        | Registra um novo cliente
PUT          | /customers/{id}         | Atualiza um cliente existente
DELETE       |  /customers/{id}        | Remove um cliente espefifico pelo ID





