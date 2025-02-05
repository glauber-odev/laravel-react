# Projeto Bootcamp Laravel + React

Este é um projeto desenvolvido durante o bootcamp de desenvolvimento, que integra o **Laravel** (framework PHP) como back-end e **React** (biblioteca JavaScript) como front-end. O objetivo é criar uma aplicação web moderna e escalável com o uso de tecnologias populares no desenvolvimento full-stack.

## Tecnologias Utilizadas

- **Back-end:** Laravel (PHP)
- **Front-end:** React (JavaScript)
- **Banco de Dados:** MySQL (ou outro banco relacional)
- **API:** Laravel API RESTful
- **Autenticação:** JWT (JSON Web Tokens)
- **Gerenciamento de Pacotes:** Composer (para PHP), npm (para JavaScript)
- **Ferramentas de Desenvolvimento:** Visual Studio Code, Postman (para testar a API), Git e GitHub

## Funcionalidades

- **Autenticação de usuário:** Login e registro de usuários com JWT.
- **CRUD de itens:** Operações básicas de Create, Read, Update, Delete para gerenciar dados.
- **Integração entre back-end e front-end:** Consumo da API RESTful do Laravel no React usando Axios.
- **Interface interativa:** Criação de uma interface de usuário com React para interagir com os dados do servidor.
- **Validação de dados:** Validação de entradas no front-end (React) e back-end (Laravel).
- **Respostas dinâmicas:** Exibição de mensagens de sucesso e erro baseadas na interação do usuário.

## Instalação

### Pré-requisitos

- **PHP** (>= 7.3)
- **Composer** (para gerenciamento de dependências PHP)
- **Node.js** (>= 14.0)
- **npm** (para gerenciamento de pacotes JavaScript)

### Passos para o Back-end (Laravel)

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-laravel-react.git
    ```

2. Entre na pasta do back-end:
    ```bash
    cd projeto-laravel-react/backend
    ```

3. Instale as dependências PHP usando o Composer:
    ```bash
    composer install
    ```

4. Crie o arquivo `.env` com base no arquivo `.env.example`:
    ```bash
    cp .env.example .env
    ```

5. Gere a chave de aplicativo Laravel:
    ```bash
    php artisan key:generate
    ```

6. Configure o banco de dados no arquivo `.env`.

7. Rode as migrações e seeders:
    ```bash
    php artisan migrate --seed
    ```

8. Inicie o servidor de desenvolvimento:
    ```bash
    php artisan serve
    ```

Agora o back-end estará rodando em `http://localhost:8000`.

### Passos para o Front-end (React)

1. Vá para a pasta do front-end:
    ```bash
    cd ../frontend
    ```

2. Instale as dependências JavaScript usando o npm:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento do React:
    ```bash
    npm start
    ```

Agora o front-end estará rodando em `http://localhost:3000`.

### Configuração da API

No arquivo `.env` do front-end, defina o URL da API do Laravel:

```env
REACT_APP_API_URL=http://localhost:8000/api
