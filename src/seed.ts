import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  await prisma.phone.deleteMany({});
  await prisma.companyProvider.deleteMany({});
  await prisma.provider.deleteMany({});
  await prisma.company.deleteMany({});

  // const companyPadrin = await prisma.company.create({
  //   data: {
  //     nameFantasy: "Padin Distribuidora",
  //     cnpj: "99.999.999/9999-99",
  //   },
  // });

  // const providerBrahma = await prisma.provider.create({
  //   data: {
  //     name: "Fornecedor das Brahmas",
  //     type: "CNPJ",
  //     cpfCnpj: "99.999.999/9999-91",
  //     companyId: companyPadrin.id,
  //     phones: {
  //       create: [
  //         {
  //           telefone: "61991289999",
  //         },
  //         {
  //           telefone: "6135819999",
  //         },
  //       ],
  //     },
  //     CompanyProvider: {
  //       create: {
  //         nameFantasy: "Brahma Dist.",
  //         cnpj: "99.999.999/9999-91",
  //       },
  //     },
  //   },
  // });

  // const providerTabaco = await prisma.provider.create({
  //   data: {
  //     name: "Fornecedor dos Tabacos",
  //     type: "CNPJ",
  //     cpfCnpj: "99.999.999/9999-92",
  //     companyId: companyPadrin.id,
  //     phones: {
  //       create: [
  //         {
  //           telefone: "61991289999",
  //         },
  //         {
  //           telefone: "6135819999",
  //         },
  //       ],
  //     },
  //     CompanyProvider: {
  //       create: {
  //         nameFantasy: "Tabaco Dist.",
  //         cnpj: "99.999.999/9999-92",
  //       },
  //     },
  //   },
  // });

  // const providerDoceCaseiros = await prisma.provider.create({
  //   data: {
  //     name: "Fornecedor de Doce caseiros",
  //     type: "CPF",
  //     cpfCnpj: "070.174.821.40",
  //     companyId: companyPadrin.id,
  //     rg: "333333",
  //     birthDay: new Date("2001-03-14"),
  //     phones: {
  //       create: [
  //         {
  //           telefone: "61991289999",
  //         },
  //         {
  //           telefone: "6135819999",
  //         },
  //       ],
  //     },
  //   },
  // });
}

main();
