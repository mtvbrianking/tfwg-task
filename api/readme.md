# API

## 🚀 Getting Started

### Clone the Repo

```bash
git clone git@github.com:mtvbrianking/tfwg-task.git

cd tfwg-task/api
```

### Install Dependencies

```bash
npm install
```

### Update configs

Copy the example .env file and customize as needed:

```bash
cp -rp .env.example .env
```

### Set Up Prisma & DB

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Seed database

```bash
npx ts-node prisma/seeds/clients.ts
```

Use Prisma Studio to explore your data visually:

```bash
npx prisma studio
```

### 4. Start the Dev Server

```bash
npm run dev
```

Server runs at: http://localhost:8000
