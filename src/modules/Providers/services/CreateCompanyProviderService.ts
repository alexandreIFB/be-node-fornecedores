import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateCompanyDTO {
  nameFantasy: string;
  cnpj: string;
  providerId: number;
}

@injectable()
export class CreateCompanyProviderService {
  async execute(requestDate: ICreateCompanyDTO) {
    const companyAlreadyExist = await prismaClient.companyProvider.findUnique({
      where: {
        cnpj: requestDate.cnpj,
      },
    });

    if (companyAlreadyExist) {
      throw new AppError("CNPJ já cadastrado");
    }

    const companyProviderAlreadyExist =
      await prismaClient.companyProvider.findUnique({
        where: {
          providerId: requestDate.providerId,
        },
      });

    if (companyProviderAlreadyExist) {
      throw new AppError("Fornecedor ja tem empresa associada");
    }

    if (!requestDate.nameFantasy || !requestDate.cnpj) {
      throw new AppError("Dados Obrigatorios não informado");
    }

    const company = await prismaClient.companyProvider.create({
      data: requestDate,
    });

    return company;
  }
}
