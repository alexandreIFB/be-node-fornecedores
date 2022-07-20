/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

declare namespace Express {
  export interface Request {
    provider: {
      type: string;
      name: string;
      cpfCnpj: string;
      rg?: string | undefined;
      birthDay?: Date | undefined;
      phones?: [] | undefined;
      companyId: number;
    };
  }
}
