# jsonforenv

<img src="https://imgur.com/0QoUUjl.png" alt="jsonforenv" align="right" width="200" />

jsonforenv is a simple tool that simplifies the configuration of environment variables. With it, you can easily load environment variables from a JSON configuration file, making your application configuration more organized and flexible.

![GitHub stars](https://img.shields.io/github/stars/HarukaYamamoto0/jsonforenv?color=informational)
![GitHub fork](https://img.shields.io/github/forks/HarukaYamamoto0/jsonforenv?color=informational)
![GitHub license](https://img.shields.io/github/license/HarukaYamamoto0/jsonforenv?color=informational)

## Installation

You can install it via npm or yarn:

```bash
npm install jsonforenv
# Or
yarn add jsonforenv
```

## Usage

First create a `.json` file, in the location you want.

```json
{
  "DATABASE_URL": "mongodb://localhost/mydb",
  "SECRET_KEY": "mysecretkey",
  "DEBUG_MODE": true
}
```

import the library into your code:

```javascript
import { loadEnvFromFile, loadEnvFromFolder } from "jsonforenv";
```

If you want to load just one configuration file, call the `loadEnvFromFile` function passing the path to the JSON file containing the environment variables:

```javascript
loadEnvFromFile("path/to/your/config.json");
```

Now if you want to load several configuration files that are inside a folder, call the `loadEnvFromFolder` function passing the path to the folder containing the .json files:

```javascript
loadEnvFromFolder("path/to/your/folder");
```

If the JSON file found is valid, the environment variables will be loaded based on the settings provided in the file, as in the example below:

```javascript
import { loadEnvFromFile } from "jsonforenv";
loadEnvFromFile();

console.log(process.env.DATABASE_URL); // mongodb://localhost/mydb
console.log(process.env.SECRET_KEY); // mysecretkey
```

### FAQ

#### Does it throw errors?

`jsonforenv` handles errors during the JSON file loading process. If errors occur when reading the file, parsing the JSON, or if the file is not found, the library will throw appropriate errors to inform the user of the problem.

Here is an example of how to catch errors when using `jsonforenv`:

```javascript
try {
  loadEnvFromFile("path/to/your/config.json");
} catch (error) {
  console.error(error.message);
  // Do something about the error if necessary
}
```

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests to improve this package.

## License

This project is licensed under the [MIT License](LICENSE).

## Assignments

- **Logo:** <a href="https://www.flaticon.com/free-icons/gear" title="gear icons">Gear icons created by Freepik - Flaticon</a>
