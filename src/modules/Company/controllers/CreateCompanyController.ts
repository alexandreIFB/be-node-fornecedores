import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyService } from "../services/CreateCompanyService";

export class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { nameFantasy, cnpj } = request.body;

    const createBatteryUseCase = container.resolve(CreateCompanyService);

    const company = await createBatteryUseCase.execute({ nameFantasy, cnpj });

    return response.json(company);
  }
}
