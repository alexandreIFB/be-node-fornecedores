import { Router } from "express";

import { CreateCompanyController } from "../modules/Company/controllers/CreateCompanyController";

const CompanyRoutes = Router();

const createCompanyController = new CreateCompanyController();

CompanyRoutes.post("", createCompanyController.handle);

export { CompanyRoutes };
