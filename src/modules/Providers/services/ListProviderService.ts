import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

interface IWhereFilter {
  name?: string;
  cpfCnpj?: string;
  date?: Date;
}
@injectable()
export class ListProviderService {
  async execute(companyId: number, filters: IWhereFilter) {
    const providers = await prismaClient.provider.findMany({
      where: {
        ...filters,
        companyId,
      },
      include: {
        phones: true,
        CompanyProvider: true,
      },
    });

    return providers;
  }
}
