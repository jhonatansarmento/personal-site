# Projeto Next.js

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Resumo do Projeto

Este projeto é um portfólio online que apresenta informações sobre Jhonatan Tibiquera Sarmento de Souza, um desenvolvedor full stack. O site inclui seções sobre suas habilidades, experiência profissional, projetos e links para suas redes sociais. O site está atualmente em produção e pode ser acessado em [jsarmento.dev](https://www.jsarmento.dev/).

## Como Começar

Primeiro, clone o repositório e instale as dependências:

\`\`\`bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install

# ou

yarn install

# ou

pnpm install

# ou

bun install
\`\`\`

Depois, inicie o servidor de desenvolvimento:

\`\`\`bash
npm run dev

# ou

yarn dev

# ou

pnpm dev

# ou

bun dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Constantes

- **profileContent.ts**: Armazena todos os textos e links usados nos componentes para garantir atualizações e manutenção fáceis.

## Funcionalidades

- **Conteúdo Dinâmico**: Textos e links são gerenciados através de um arquivo de \`constants\` centralizado.
- **Design Responsivo**: Estilizado com \`styled-components\` para garantir responsividade e facilidade de manutenção.
- **Ícones**: Usa \`react-icons\` para links de redes sociais.

## Implantação no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.
