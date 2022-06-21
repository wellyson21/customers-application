  import * as express from "express";
  
  const config = (controllers: any)=>{

    const AppRouter = express.Router();

    const registerRoutes = (path: string, controller: any)=>{

      // wrap Controller methods inside arrow function to hold this context

      AppRouter.get(path, (req: any, res: any)=> { controller.get(req, res) });
      AppRouter.post(path, (req: any, res: any)=> { controller.register(req, res) });
      AppRouter.put(`${path}/:id`, (req: any, res: any)=> { controller.update(req, res) });
      AppRouter.delete(`${path}/:id`, (req: any, res: any)=> { controller.delete(req, res) });
    };
    
    AppRouter.post("/users/login", (req: any, res: any) => controllers.UsersController.login(req, res));
    AppRouter.post("/users/refreshtoken", (req: any, res: any) => controllers.UsersController.refreshtoken(req, res));

    registerRoutes("/users", controllers.UsersController);
    registerRoutes("/customers", controllers.CustomersController);

    return AppRouter;
  };


  export default config;