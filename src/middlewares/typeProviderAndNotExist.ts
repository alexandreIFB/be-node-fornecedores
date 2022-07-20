import { NextFunction, Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export async function typeProviderAndNotExist(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  const { type, rg, birthDay, cpfCnpj, companyId, name, phones } = request.body;

  const providerAlredyExist = await prismaClient.provider.findUnique({
    where: {
      cpfCnpj,
    },
  });

  if (providerAlredyExist) {
    throw new AppError("Fornecedor com CPF/CNPJ Ja Cadastrado");
  }

  if (type === "CPF") {
    if (!rg || !birthDay) {
      throw new AppError("Dados para pessoa fisica invalidos ou inexistentes");
    }

    if (new Date().getFullYear() - new Date(birthDay).getFullYear() < 18) {
      throw new AppError("Fornecedor menor de idade");
    }
  }

  request.provider = {
    companyId,
    cpfCnpj,
    name,
    type,
    birthDay: new Date(birthDay),
    phones,
    rg,
  };

  next();
}
