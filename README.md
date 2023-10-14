# Api de registro de clientes com altentificação e frontend angular

## Informações de Execução

### Crie um banco de dados após isso
#### Dentro o projeto back-end edite o arquivo Database.ts com as informações do banco de dados

### Execulte o back-end
### Execulte o front-end
    - Agora pode usar normalmente



## API

### Cria usuário em POST /users  {name, email e password}
### Realiza login em POST  /users/login {email e password}
### Atualiza o token antes de expirar em POST /users/refreshtoken
### Cria clientes em POST /customers  {name, email, phone, address: JSON}


### Informações de Rotas

```
{header: {access_token: "{TOKEN}"},
  routes: {
  customers: {
    get: { method: "GET", paths: ["/customers", "/customers/{id}", "/customers?key=value"] },
    register: { method: "POST", paths: ["/customers"] },
    update: { method: "PUT", paths: ["/customers/{id}"] },
    delete: { method: "GET", paths: ["/customers/{id}"] }
  },
  users: {
    get: { method: "GET", paths: ["/users", "/users/{id}", "/users?key=value"] },
    register: { method: "POST", paths: ["/users"] },
    update: { method: "PUT", paths: ["/users/{id}"] },
    delete: { method: "GET", paths: ["/customers/{id}"] },
    login: { method: "POST", paths: ["/users/login"] },
    refreshtoken: { method: "POST", paths: ["/users/refreshtoken"] },
  }
}
```

