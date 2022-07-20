import { Router } from "express";

import { typeProviderAndNotExist } from "../middlewares/typeProviderAndNotExist";
import { CreateCompanyProviderController } from "../modules/Providers/controllers/CreateCompanyProviderController";
import { CreateProviderController } from "../modules/Providers/controllers/CreateProviderController";
import { ListProviderController } from "../modules/Providers/controllers/ListProviderController";

const ProviderRoutes = Router();

const createProviderController = new CreateProviderController();
const createCompanyProviderController = new CreateCompanyProviderController();
const listProviderController = new ListProviderController();

ProviderRoutes.post(
  "",
  typeProviderAndNotExist,
  createProviderController.handle
);

ProviderRoutes.post(
  "/:providerId/company",
  createCompanyProviderController.handle
);

ProviderRoutes.get("/:companyId", listProviderController.handle);

export { ProviderRoutes };
