import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProviderService } from "../services/CreateProviderService";

export class CreateProviderController {
  async handle(request: Request, response: Response) {
    const datas = request.provider;

    const createProviderUseCase = container.resolve(CreateProviderService);

    const provider = await createProviderUseCase.execute(datas);

    return response.json(provider);
  }
}
