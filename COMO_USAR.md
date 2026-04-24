# Como Usar

## Visão geral

O projeto está dividido em duas aplicações:

- `frontend/`: painel web em React
- `backend/`: API REST com autenticação, regras de negócio e persistência SQLite

## Requisitos

- Node.js 20+ recomendado
- npm 10+ recomendado

## 1. Subir o backend

No diretório [backend](/home/athenas/Associacao-Pescadores/backend):

```bash
npm install
npm run preparar
npm run dev
```

Isso irá:

- instalar as dependências
- gerar o client do Prisma
- sincronizar o schema com o SQLite
- popular o banco com usuário admin e dados de demonstração
- subir a API em `http://localhost:3333`

## 2. Subir o frontend

No diretório [frontend](/home/athenas/Associacao-Pescadores/frontend):

```bash
npm install
npm run dev
```

O painel abrirá, por padrão, em `http://localhost:5173`.

Se a API estiver em outra URL, crie um arquivo `.env` dentro da pasta do frontend com:

```bash
VITE_API_URL=http://localhost:3333
```

## 3. Login padrão

- E-mail: `admin@pescadores.local`
- Senha: `admin123`

## 4. O que já está funcional

- login com JWT
- dashboard integrado com indicadores reais
- CRUD de associados
- fluxo de lojas com aprovação/rejeição
- CRUD de permissões com ativação/desativação
- criação e condução de reuniões com presença
- cadastro de mensalidades e baixa de pagamento
- atualização automática de inadimplência
- endpoints públicos para integração externa
- logs de auditoria acessíveis pela API

## 5. Dados importantes para demo

- O banco é local (`SQLite`) e fica no ambiente do backend.
- O fluxo foi pensado para demonstração e desenvolvimento rápido.
- Em produção, a troca para PostgreSQL fica concentrada no `schema.prisma` e nas variáveis de ambiente.
