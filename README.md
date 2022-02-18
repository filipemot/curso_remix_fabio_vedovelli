
# Curso Remix - Fábio Vedovelli - 2022
 

**Dependências**

    npm install --global yarn

**Instalação - Remix App Server:**

    npx create-remix@latest github

**É necessário criar um um arquivo .env:**

    npm add dotenv --save
    
**No arquivo  .env crie a variável GITHUB_TOKEN:**

    GITHUB_TOKEN=Token do Github

**Geração BD prisma:**

    npx prisma db push

**Carergar o banco de dados:**

    yarn db:seed

**Execução:**

    yarn dev

**Rotas Disponibilizadas:**

- {dominio_gerado_remix}/github/{username}
  

**Conteúdos Aprendidos:**

- Criação do Projeto
- Criação da Rota Username, que faz uma chamada para a api do github
- Organizando as partes em componentes
- Criação de rotas para child componentes
- Instalação Tailwind
- Link prefetch="intent", que é usado para carregar os componentes antes de serem renderizados
- Add Prisma