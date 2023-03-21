# Chainlink Cairo Starter Kit

<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="./logo.png" width="225" alt="Chainlink Cairo logo">
</a>
</p>
<br/>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/smartcontractkit/cairo-starter-kit)

The boilerplate code for getting started with the usage of Chainlink services on Starknet. [Here](https://docs.chain.link/data-feeds/starknet) you can visit the official Chainlink documentation for using Data Feeds on Starknet.

## Getting started

### Prerequisites

Be sure to have installed the following

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/en/download/) in the `>=14 <=18` version range
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Python](https://www.python.org/downloads/) in the `>=3.6 <=3.9` version range

### Clone the repository

To clone the repository, run the following commands:

```
git clone https://github.com/smartcontractkit/cairo-starter-kit.git
cd cairo-starter-kit
```

### Setting Up Starknet

To set up your Starknet development environment, follow the [official quickstart guide](https://docs.starknet.io/documentation/getting_started/setting_up_the_environment/).

Here you can see listed all of the commands from the mentioned quickstart guide.

- `python3.9 -m venv ~/cairo_venv`
- `source ~/cairo_venv/bin/activate`
- `pip3 install ecdsa fastecdsa sympy`
- `brew install gmp`
- `pip3 install cairo-lang`

Verify that all of the required tools are configured correctly:

- Starknet CLI
  - Run: `starknet -v`
  - Expected output: `starknet 0.10.3`
- Cairo CLI
  - Run: `cairo-compile -v`
  - Expected output: `cairo-compile 0.10.3`
- NodeJS
  - Run: `node -v`
  - Expected output: `v18.12.1`
- Yarn
  - Run: `yarn --version`
  - Expected output: `1.22.19`

### Compiling and running your first Cairo program

Not all Cairo programs are valid Starknet smart contracts. To compile your first Cairo program run the following command:

```
cairo-compile contracts/MyFirstCairoProgram.cairo --output MyFirstCairoProgram_compiled.json
```

To debug the execution of your first Cairo program, execute the next command, and then open the http://localhost:8100/

```
cairo-run --program=MyFirstCairoProgram_compiled.json --print_output --print_info --relocate_prints --tracer
```

### Usage

This repo comes with the Hardhat project which was set up for working with Starknet using the `@shardlabs/starknet-hardhat-plugin` plugin.

To get started run:

```
npm install

# or

yarn install
```

To compile contracts run the next command:

```
yarn build
```

To deploy the Starknet Data Feeds Consumer contract on the Starknet Goerli Alpha Testnet, run:

```
yarn deploy
```

Now you can get the latest price of LINK/USD on Starknet Goerli Alpha Testnet by running:

```
yarn readLatestRound
```

Optionally, you can query LINK/USD data feed without deploying the Proxy Consumer contract, completely off-chain. To do that, run the following command:

```
yarn readLatestRoundOffChain
```

Or directly from the CLI, without the usage of Hardhat tasks:

```
starknet call --address 0x2579940ca3c41e7119283ceb82cd851c906cbb1510908a913d434861fdcb245 --function latest_round_data --abi ./contracts/abis/aggregator_proxy_abi.json
```

To see addresses of other available data feeds on Starknet, besides LINK/USD, visit the [official Chainlink documentation](https://docs.chain.link/data-feeds/price-feeds/addresses?network=starknet).

### Creating Starknet Account

All accounts on Starknet are represented as smart contracts. To set up your Starknet account, follow the [official guide](https://docs.starknet.io/documentation/getting_started/account_setup/).

To see the details of your default Starknet account on the Starknet Goerli Alpha Testnet, run the following command:

```
open ~/.starknet_accounts/starknet_open_zeppelin_accounts.json
```

### Block Explorer

The Starknet Goerli Alpha Testnet block explorer is available at https://testnet.starkscan.co/.

## Contributing

Contributions are always welcome! Open a PR or an issue! Thank you!
