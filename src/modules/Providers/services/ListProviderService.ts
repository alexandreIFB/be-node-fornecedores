import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListProviderService {
  async execute(companyId: number) {
    const providers = await prismaClient.provider.findMany({
      where: {
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
