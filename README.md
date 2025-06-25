# Simple Starter

## Setup

1. Clone repo and install dependencies:

   ```bash
   git clone https://github.com/Jhinger/starter.git starter
   cd starter
   npm install
   ```

2. Configure SST (`sst.config.ts`) and update your AWS Credentials.

## Development

```bash
npm run dev
sst dev
```

## Deployment

```bash
sst deploy
```

## Updates

Customize the following files:

- `src/email/auth.ts`
- `src/auth/index.ts`
- `src/auth/client/index.ts`
