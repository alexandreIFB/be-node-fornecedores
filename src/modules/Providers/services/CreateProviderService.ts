import { CompanyType } from "@prisma/client";
import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

interface ICreateCompanyDTO {
  type: string;
  name: string;
  cpfCnpj: string;
  rg?: string | undefined;
  birthDay?: Date | undefined;
  phones?: [] | undefined;
  companyId: number;
}

@injectable()
export class CreateProviderService {
  async execute(requestDate: ICreateCompanyDTO) {
    const provider = await prismaClient.provider.create({
      data: {
        cpfCnpj: requestDate.cpfCnpj,
        name: requestDate.name,
        type: CompanyType[requestDate.type],
        birthDay: requestDate.birthDay,
        companyId: requestDate.companyId,
        phones: {
          create: requestDate.phones,
        },
      },
      include: {
        phones: true,
      },
    });

    return provider;
  }
}
