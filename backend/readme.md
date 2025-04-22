Backend
---

**Clone the Repo**

```bash
git clone git@github.com:mtvbrianking/tfwg-task.git

cd tfwg-task/backend
```

**Install Dependencies**

```bash
npm install
```

**Update configs**

Copy the example .env file and customize as needed:

```bash
cp -rp .env.example .env
```

**Set Up Prisma & DB**

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

**Start the Dev Server**

```bash
npm run dev
```
