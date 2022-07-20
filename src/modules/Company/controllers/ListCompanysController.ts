import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCompanyService } from "../services/ListCompanyService";

export class ListCompanyController {
  async handle(request: Request, response: Response) {
    const listCompanyUseCase = container.resolve(ListCompanyService);

    const companys = await listCompanyUseCase.execute();

    return response.json(companys);
  }
}
