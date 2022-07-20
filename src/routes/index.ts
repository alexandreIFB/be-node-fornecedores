import { Router } from "express";

import { CompanyRoutes } from "./company.routes";
import { ProviderRoutes } from "./provider.routes";

const router = Router();

router.use("/company", CompanyRoutes);
router.use("/provider", ProviderRoutes);

export { router };
