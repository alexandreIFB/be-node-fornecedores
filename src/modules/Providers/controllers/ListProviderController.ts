import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProviderService } from "../services/ListProviderService";

function mountFilter({ cpfCnpj, name, date }) {
  let filter = {};
  if (cpfCnpj) {
    filter = {
      ...filter,
      cpfCnpj,
    };
  }

  if (name) {
    filter = {
      ...filter,
      name,
    };
  }

  if (date) {
    filter = {
      ...filter,
      date: new Date(date),
    };
  }
  console.log(filter);
  return filter;
}
export class ListProviderController {
  async handle(request: Request, response: Response) {
    const { cpfCnpj, name, date } = request.query;
    const { companyId } = request.params;

    const listCompanyUseCase = container.resolve(ListProviderService);

    const filters = mountFilter({ cpfCnpj, name, date });

    const providers = await listCompanyUseCase.execute(+companyId, filters);

    return response.json(providers);
  }
}
