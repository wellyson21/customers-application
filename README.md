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



<table>
    <thead>
        <tr>
            <th>Método</th>
            <th>Rota</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/users/login</td>
            <td>Realiza o login de usuários</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/users/refreshtoken</td>
            <td>Realiza Atualização de token</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>Realiza o registro de novos usuários</td>
        </tr>
         <tr>
            <td>PUT</td>
            <td>/users</td>
            <td>Realiza a atualização de usuários existentes</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>Obtêm todos os usuários existentes</td>
        </tr>
         <tr>
            <td>GET</td>
            <td>/users/{id}</td>
            <td>Obtêm um usuario espefifico pelo ID</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/users/{id}</td>
            <td>Remove um usuario espefifico pelo ID</td>
        </tr>

     
    </tbody>
</table>


Método  | Rota    | Descrição
------- | --------  | ---------------
GET           | /customers     | Obtêm todos os clientes
GET          | /customers/{id}         | Obtêm um cliente espefifico pelo ID
POST          | /customers/{id}        | Registra um novo cliente
PUT          | /customers/{id}         | Atualiza um cliente existente
DELETE       |  /customers/{id}        | Remove um cliente espefifico pelo ID





