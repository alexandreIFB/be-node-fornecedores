import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProviderService } from "../services/ListProviderService";

export class ListProviderController {
  async handle(request: Request, response: Response) {
    const { companyId } = request.params;

    const listCompanyUseCase = container.resolve(ListProviderService);

    const providers = await listCompanyUseCase.execute(+companyId);

    return response.json(providers);
  }
}
