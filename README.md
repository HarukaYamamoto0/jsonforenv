# jsonforenv

<img src="https://imgur.com/0QoUUjl.png" alt="jsonforenv" align="right" width="200" />

jsonforenv is a simple tool that simplifies the configuration of environment variables. With it, you can easily load environment variables from a JSON configuration file, making your application configuration more organized and flexible.

![GitHub stars](https://img.shields.io/github/stars/HarukaYamamoto0/jsonforenv?color=informational)
![GitHub fork](https://img.shields.io/github/forks/HarukaYamamoto0/jsonforenv?color=informational)
![GitHub license](https://img.shields.io/github/license/HarukaYamamoto0/jsonforenv?color=informational)

## Installation

To use `jsonforenv`, you can install it via npm or yarn:

```bash
npm install jsonforenv
# Or
yarn add jsonforenv
```

## Use

First, import the library into your code:

```javascript
import loadEnvironment from 'jsonforenv';
```

Then call the `loadEnvironment` function passing the path to the JSON file that contains your environment variable settings:

```javascript
loadEnvironment('path/to/your/config.json');
```

If the JSON file is found and valid, the environment variables will be loaded based on the settings provided in the file.

### Error Handling

`jsonforenv` handles errors during the JSON file loading process. If errors occur when reading the file, parsing the JSON, or if the file is not found, the library will throw appropriate errors to inform the user of the problem.

Here is an example of how to catch errors when using `jsonforenv`:

```javascript
try {
  loadEnvironment('path/to/your/config.json');
} catch (error) {
  console.error(error.message);
  // Do something about the error if necessary
}
```

## JSON File Example

Here is an example of how the JSON file that `jsonforenv` can load should be structured:

```json
{
  "DATABASE_URL": "mongodb://localhost/mydb",
  "SECRET_KEY": "mysecretkey",
  "DEBUG_MODE": true
}
```

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests to improve this package.

## License

This project is licensed under the [MIT License](LICENSE).

<a href="https://www.flaticon.com/free-icons/gear" title="gear icons">Gear icons created by Freepik - Flaticon</a>
