import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyProviderService } from "../services/CreateCompanyProviderService";

export class CreateCompanyProviderController {
  async handle(request: Request, response: Response) {
    const { nameFantasy, cnpj } = request.body;
    const { providerId } = request.params;

    console.log(providerId);

    const createCompanyUseCase = container.resolve(
      CreateCompanyProviderService
    );

    const company = await createCompanyUseCase.execute({
      nameFantasy,
      cnpj,
      providerId: +providerId,
    });

    return response.json(company);
  }
}
