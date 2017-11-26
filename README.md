# My Typescript

## How to create a new service

## Setup database

```
psql
  > CREATE DATABASE my-typescript
  > CREATE DATABASE my-typescript-testing
  > CREATE EXTENSION "uuid-ossp";
```

## Working with migrations

```
knex migrate:latest
knex migrate:rollback
knex migrate:make [MIGRATION_NAME]
```
