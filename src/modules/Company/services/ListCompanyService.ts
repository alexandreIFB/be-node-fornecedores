import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListCompanyService {
  async execute() {
    const companys = await prismaClient.company.findMany();

    return companys;
  }
}
