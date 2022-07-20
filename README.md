# Teste

Parei para ler o teste e observei que é na linguagem C#, vou ser sincero que não me lembro muito bem dos requisitos da vaga mas minha experiência e corriculo é voltado a Javascript, mais especificamente com NODE no backend e React para o Front.


Alexandre Abreu da Silva

##  Planejando o banco de dados.

Conforme requisito informados foi possivel chegar no seguinte relacionamento.


### Relacionamento Banco

![App Screenshot](screenshots/relac.png)

Decidi criar um campo especifico no banco para o type 
(pessoa fisica/juridica) para caso validar as regras de negocios necessarias.

## Configurando Docker para o banco de dados.

`docker-compose up`


## Prisma

Para a comunicação API - Banco de Dados foi escolhido o ORM Prisma

### Gerando o SQL e Rodando no banco

`npx prisma migrate dev --preview-feature --skip-generate --name "init"`

### Gerando o Client do Prisma

`npx prisma generate`

### Acessando o Prisma Studio para visualizar os dados

`npx prisma studio`

![App Screenshot](screenshots/prisma-studio.png)


### Seed para popular o banco afins de teste

`yarn seed`

### Endpoints da API


### /company

* POST - Cria uma nova empresa.

![App Screenshot](screenshots/post-company-ok.png)

Tratamento de Errors:

* Campos obrigatorios faltando

![App Screenshot](screenshots/post-company-missingdata.png)

* CNPJ já existente

![App Screenshot](screenshots/post-company-exists.png)

* GET - Listando todas empresas.

![App Screenshot](screenshots/get-company.png)


### /providers

* POST TYPE - CNPJ - Cria uma novo fornecedor.

![App Screenshot](screenshots/post-provider-ok.png)

* CNPJ/CPF já existente

![App Screenshot](screenshots/post-provider-exists.png)

* POST TYPE - CPF - Cria uma novo fornecedor.

![App Screenshot](screenshots/post-providerCpf-ok.png)

VALIDAÇÃO REGRA DE NEGOCIO: 

* POST - CPF - RG ou Data de Nascimento Faltando:

![App Screenshot](screenshots/post-providerCpf-missingData.png)

* POST CPF - Fornecedor Menor de idade

![App Screenshot](screenshots/post-providerCpf-menor.png)

* Get - Listagem de fornecedores pelo ID da empresa

![App Screenshot](screenshots/get-provider-ok.png)

* Get - Listagem Com filtros

![App Screenshot](screenshots/get-provider-filters.png)

* Cadastro da Empresa a parte

![App Screenshot](screenshots/post-providerCompany-ok.png)
