# Documentação do Projeto: Secret Shop

## Visão Geral
**Secret Shop** é um e-commerce "headless" moderno, construído com React, Vite e a API Storefront do Shopify. O projeto utiliza uma arquitetura desacoplada onde o frontend é independente do backend do Shopify, comunicando-se através de consultas GraphQL.

## Tecnologias Utilizadas
- **Framework**: [React 18](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de UI**: [Shadcn UI](https://ui.shadcn.com/) (baseado em Radix UI)
- **Gerenciamento de Estado**: [Zustand](https://zustand-demo.pmnd.rs/) (estado local) e [React Query](https://tanstack.com/query/latest) (estado de servidor/API)
- **Roteamento**: [React Router DOM](https://reactrouter.com/)
- **Integração E-commerce**: [Shopify Storefront API](https://shopify.dev/docs/api/storefront) (GraphQL)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Validação de Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Testes**: [Vitest](https://vitest.dev/) (unitários/integração) e [Playwright](https://playwright.dev/) (E2E)

## Estrutura do Projeto
- `src/`: Contém o código-fonte principal.
  - `components/`: Componentes React reutilizáveis.
    - `ui/`: Componentes básicos de interface (Shadcn UI).
  - `hooks/`: Hooks personalizados para lógica de estado e efeitos.
  - `lib/`: Utilitários e configurações de bibliotecas externas (ex: Shopify API).
  - `pages/`: Componentes de página que definem as rotas da aplicação.
  - `stores/`: Definições de estados globais usando Zustand.
  - `assets/`: Imagens, fontes e outros recursos estáticos.
  - `test/`: Configurações e testes da aplicação.
- `public/`: Arquivos estáticos servidos diretamente.
- `Docs/`: Documentação do projeto.

## Principais Funcionalidades
1.  **Integração Shopify**: Conecta-se diretamente à loja Shopify via GraphQL para buscar produtos, variantes e gerenciar o carrinho.
2.  **Carrinho de Compras Persistente**: Utiliza Zustand para gerenciar o estado do carrinho localmente e sincroniza com a API do Shopify.
3.  **Sistema de Checkout**: Redireciona o usuário para o checkout nativo do Shopify após a finalização da compra no frontend.
4.  **Interface Responsiva**: Design moderno e adaptável para dispositivos móveis e desktop usando Tailwind CSS.
5.  **Age Gate**: Verificação de idade na entrada do site para conformidade regulatória (dependendo do tipo de produto).
6.  **Páginas Dinâmicas**: Rotas para listagem de produtos, detalhes de produto e categorias.

## Como Executar o Projeto
1.  **Instalação de Dependências**: `npm install` (ou `bun install`)
2.  **Execução em Desenvolvimento**: `npm run dev`
3.  **Build para Produção**: `npm run build`
4.  **Executar Testes**: `npm run test`

## Configuração do Shopify
As configurações de conexão com o Shopify estão localizadas em `src/lib/shopify.ts`. Atualmente, o projeto está configurado para o domínio `secret-embrace-03vf8.myshopify.com` com uma chave de acesso Storefront específica.
