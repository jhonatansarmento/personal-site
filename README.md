# Projeto Next.js - Portfólio de Jhonatan Tibiquera Sarmento de Souza

Este é um projeto desenvolvido com [Next.js](https://nextjs.org/) utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). O projeto serve como um portfólio online para apresentar informações sobre o desenvolvedor full stack Jhonatan Tibiquera Sarmento de Souza.

## Resumo do Projeto

O portfólio inclui seções detalhadas sobre as habilidades, experiência profissional, projetos realizados e links para as redes sociais de Jhonatan. O site está atualmente em produção e pode ser acessado em [jsarmento.dev](https://www.jsarmento.dev/).

## Como Iniciar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clonar o repositório e instalar dependências:

```bash
git clone https://github.com/jhonatansarmento/personal-site
cd seu-repositorio
npm install

# ou, dependendo da sua ferramenta preferida:

yarn install
pnpm install
bun install
```

### 2. Rodar o servidor de desenvolvimento:

```bash
npm run dev

# ou, dependendo da sua ferramenta preferida:

yarn dev
pnpm dev
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto em execução.

## Funcionalidades

- **Theme Provider**: Implementação do `ThemeProvider` utilizando `styled-components` para gerenciamento de temas. Inclui um tema primário (`primaryTheme`) com cores definidas.
- **Design Responsivo**: Totalmente responsivo, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.
- **Gerenciamento Centralizado de Conteúdo**: Textos, links e demais informações estão centralizados no arquivo `constants`, facilitando atualizações e manutenções.
- **Ícones de Redes Sociais**: Integrado com a biblioteca `react-icons` para ícones de redes sociais, garantindo fácil atualização e consistência visual.
- **Estilos Modernos**: Todos os estilos foram atualizados recentemente para refletir o novo tema e melhorar a aparência visual.

## Estrutura do Projeto

### Arquivo de Constantes

- **profileContent.ts**: Este arquivo armazena todos os textos e links usados nos componentes, permitindo uma fácil atualização de conteúdo.

### Temas

- **primaryTheme**: Define as cores principais usadas no projeto, permitindo fácil alteração de temas no futuro.

## Implantação no Vercel

A implantação deste projeto é feita através da [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), que oferece suporte nativo para projetos Next.js.

Consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para obter mais detalhes sobre como fazer o deploy.

---

Sinta-se à vontade para contribuir ou relatar problemas diretamente no repositório!
