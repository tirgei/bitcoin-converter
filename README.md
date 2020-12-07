# bitcoin-converter

This is a BTC to USD Converter based on latest rates from [Coingecko](https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd). The app is build using [React](https://reactjs.org/).

The service is hosted on [Heroku](https://heroku.com) and is available on [btc-2-usd](https://btc-2-usd.herokuapp.com/).

## Prerequisites

- [VS Code](https://code.visualstudio.com) / [WebStorm](https://www.jetbrains.com/webstorm/)
- [React](https://reactjs.org/)
- [yarn](https://yarnpkg.com/en/)

## Project setup

This project setup assumes you're using a Linux based development environment ([Linux Mint](https://linuxmint.com)). Steps for other platforms e.g. Windows and MacOS may be different. Check up relevant guides for those platforms.

- Clone the repo

```console
foo@bar:~$ git clone https://github.com/tirgei/bitcoin-converter.git
```

- CD into the project folder

```console
foo@bar:~$ cd bitcoin-converter/
```

- Install the project dependencies

```console
foo@bar:~$ yarn install
```

- Start the server

```console
foo@bar:~$ yarn start
```

### License

```licence
Copyright 2020 Vincent Tirgei

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
