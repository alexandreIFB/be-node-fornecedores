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
    const companyAlreadyExist = await prismaClient.company.findUnique({
      where: {
        cnpj: requestDate.cnpj,
      },
    });

    if (companyAlreadyExist) {
      throw new AppError("CNPJ já cadastrado");
    }

    if (!requestDate.nameFantasy || !requestDate.cnpj) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const company = await prismaClient.company.create({
      data: requestDate,
    });

    return company;
  }
}
