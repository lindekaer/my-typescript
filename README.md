# My Typescript

## How to create a new service

## Setup database

```
psql
  > CREATE DATABASE my_typescript
  > CREATE DATABASE my_typescript_testing
  > CREATE EXTENSION "uuid-ossp";
```

## Working with migrations

```
knex migrate:latest
knex migrate:rollback
knex migrate:make [MIGRATION_NAME]
```

## TODO

* Make email and username on user unique
