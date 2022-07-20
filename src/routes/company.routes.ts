import { Router } from "express";

import { CreateCompanyController } from "../modules/Company/controllers/CreateCompanyController";
import { ListCompanyController } from "../modules/Company/controllers/ListCompanysController";

const CompanyRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompanyController = new ListCompanyController();

CompanyRoutes.post("", createCompanyController.handle);
CompanyRoutes.get("", listCompanyController.handle);
CompanyRoutes.get("", listCompanyController.handle);

export { CompanyRoutes };
