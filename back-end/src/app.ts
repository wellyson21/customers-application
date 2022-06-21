

  import * as express from "express";
  import cors from "cors";
  import config from "./routes";
  import * as bodyParser from "body-parser";
  import * as registerEntities from "./utilities/RegisterEntities";
  import controllers from "./utilities/StartControllers";

  const app = express.default();
  const port = 2000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());



  // Start Route

  app.get("/", (request: express.Request, response: express.Response)=> {
    response.status(200).send({
      title: "Beckend - customers-app",
      header: {access_token: "{TOKEN}"},
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
    }); 
  });


  // Routes

  app.use(config(controllers));

  // Start Server

  app.listen(port, ()=>{ console.log(`running in port: ${port}`); });


  // Initialize Entitities

  registerEntities.default.sync();
