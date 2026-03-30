# power-automate-utils-dqd

API backend en NestJS para utilidades de Power Automate.

- Convierte imágenes base64 a PNG.
- Registra paneles escaneados en SQL Server.
- Protegido con llave API.

## Stack

- NestJS 11
- TypeORM + MSSQL
- Sharp
- `class-validator`
- `@nestjs/config`

## Requisitos

- Node.js 20+
- SQL Server accesible
- Variables de entorno configuradas

## Setup

```bash
npm install

# crear .env manualmente
npm run start:dev
```

## Variables de entorno

- `API_KEY`
- `MSSQL_DB_HOST`
- `MSSQL_DB_PORT`
- `MSSQL_DB_USERNAME`
- `MSSQL_DB_PASSWORD`
- `MSSQL_DB_DATABASE`

## Scripts

- `npm run start`
- `npm run start:dev`
- `npm run start:prod`
- `npm run build`
- `npm run lint`
- `npm run format`
- `npm run test`
- `npm run test:e2e`
- `npm run test:cov`

## Endpoints

### Convertir imagen a PNG

`POST /api/image/convert-to-png`

Headers:
- `Content-Type: application/json`
- `x-api-key: <API_KEY>`

Body:

```json
{
  "image": "data:image/jpeg;base64,...",
  "compressionLevel": 6,
  "maxSize": 400
}
```

### Registrar paneles escaneados

`POST /barcodereader`

Headers:
- `Content-Type: application/json`
- `x-api-key: <API_KEY>`

Body:

```json
{
  "parque": "Parque A",
  "tracker": "TRACKER-123",
  "paneles": ["PANEL-001", "PANEL-002"]
}
```

## Estructura

```
src/
  app.module.ts
  main.ts
  auth/api-key.guard.ts
  image-conversion/
  barcode-reader/
    entities/paneles.entity.ts
```

## Notas

- `TypeOrmModule` carga la conexión MSSQL usando `@nestjs/config`.
- Todos los endpoints requieren `x-api-key`.
