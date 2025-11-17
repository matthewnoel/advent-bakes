# Advent of Baking

An advent endeavor for the masochistic patissier

## How to run locally

Set your Node version

```bash
nvm use
```

Install dependencies

```bash
npm i
```

Run dev server

```bash
npm run dev
```

# How to mock dates

Inside `lib/utils.ts` there's a `getCurrentDate` function which accepts an optional `Date` parameter. You can use it to mock the current date when testing.

## How deployment works

The site is built and deployed to GitHub pages with the action at `.github/workflows/pages.yml`
