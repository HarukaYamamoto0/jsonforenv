# jsonforenv

This package is a very lightweight solution for those who prefer to use a json file instead of env files, I created it because I really like creating bots for discord, and I needed the settings file values to be available for the whole project, but it was too much boring every time to make a kludge to be able to import a json file in ecmascript.

## Instalação
Installation is very simple, see some examples below:

npm
```shell
npm install jsonforenv
```

yarn
```shell
yarn add jsonforenv
```

pnpm
```shell
pnpm add jsonforenv
```

## Uso
```js
import jsonforenv from "jsonforenv";
import express from "express";
const app = express();

jsonforenv();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("running server");
});
```

## Coisas a ter em mente
- Ele por padrão procura por um arquivo `config.json`
- Você pode passar como argumento um caminho para um arquivo `.json` diferente do padrão
- No futuro eu espero adic
