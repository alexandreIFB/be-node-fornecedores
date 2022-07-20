import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateCompanyDTO {
  nameFantasy: string;
  cnpj: string;
}

@injectable()
export class CreateCompanyService {
  async execute(requestDate: ICreateCompanyDTO) {
    if (!requestDate.nameFantasy || !requestDate.nameFantasy) {
      throw new AppError("Dados Obrigatorios não informado", 400);
    }

    const company = await prismaClient.company.create({
      data: requestDate,
    });

    return company;
  }
}
