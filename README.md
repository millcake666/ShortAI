1 .Установить плагины для своей IDE:

eslint
prettier

2. По желанию но рекемендую включить в настройках IDE автоформат ts/tsx/js/jsx

3. установить yarn v1
   https://classic.yarnpkg.com/en/docs/install#mac-stable

4. выполнить установку через команду в консоли из корня проекта `yarn`

5. запустить `npm run dev`

---

описание скриптов:

в корне проекта, package.json

```json
  "scripts": {
    "dev": "yarn workspace @short-ai/short-ai-app start",
    "build": "yarn workspace @short-ai/short-ai-app build",
    "dev:landings": "yarn workspace @short-ai/landings dev",
    "build:landings": "yarn workspace @short-ai/landings build",
    "orval": "npx orval && npx prettier --config ./.prettierrc --write ./packages/short-ai-app/src/features/api/generated/* && npx eslint --fix ./packages/short-ai-app/src/features/api/generated/*",
    "format:all": "npx prettier --config ./.prettierrc --write ./packages/* && npx eslint --fix ./packages/*",
    "pinger": "yarn workspace @short-ai/paywall-server start"
  }
```

доступ к скриптам внутри пакетов осуществлен через конcтрукцию: `yarn workspace @monorepo-name/package-name script_alias`
например: `yarn workspace @short-ai/short-ai-app start` - скрипт `start` находится по пути `./packages/short-ai-app/package.json`
