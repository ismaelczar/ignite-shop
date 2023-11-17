# Ignite Shop

O Ignite Shop é um aplicativo web de vendas de camisetas com temas do mundo dev, mostrando com detalhes a parte visual e informacional das camisetas, além de apresentar um carrinho onde o cliente pode adicionar suas compras.
O principal conceito treinado nesta aplicação foi a utilização do framework Next.js, explorando conceitos como o de SSR (Server Side Rendering) e SSG (Static Site Generation), além da utilização da biblioteca Stitches.js para a estilização.
O projeto foi desenvolvido como conclusão de um desafio do curso Ignite oferecido pela Rocketseat . O Ignite é um curso de especialização em stacks específicas exclusivamente utilizadas e valorizadas no mercado como React, React Native, Node.js e Elixir.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Precisará também fazer a seguinte configuração para rodar o projeto:
* Criar uma conta e projeto no [Stripe](https://stripe.com/br), e copiar as chaves pública e privada do projeto
* Criar na raiz do projeto o arquivo `.env.local`
* Criar no arquivo `.env.local` as variáveis de ambiente, conforme o exemplo do arquivo `.env.example`
* Colocar nas variáveis de ambiente os respectivos valores, incluindo as chaves copiadas do projeto do STRIPE

Todos cartões de crédito disponíveis para teste (ex: 4242 4242 4242 4242) estão especificados na seguinte [documentação](https://stripe.com/docs/testing#cards) do Stripe

### 🔧 Rodando a aplicação web (Front-End)

```bash
# Clone este repositório
$ git clone https://github.com/ismaelczar/ignite-shop.git

# Vá para a pasta da aplicação Front End
$ cd ignite-shop

# Instale as dependências
$ yarn add

# Configure as variáveis de ambiente (conforme já explicado anteriormente)

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Next.js](https://nextjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Stitches](https://stitches.dev/)**
-   **[Phosphor-Icons](https://phosphoricons.com/)**
-   **[RadixUI](https://www.radix-ui.com/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Stripe](https://stripe.com/br)**
-   **[Use Shopping Cart](https://useshoppingcart.com/docs)**
-   **[Swiper](https://swiperjs.com/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo  [package.json](./package.json)



## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🤵 Autor

- [LinkedIn](https://www.linkedin.com/in/ismaelcezar/)


repositório:
