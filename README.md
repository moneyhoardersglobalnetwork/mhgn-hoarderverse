# M.H.G.N Hoarderverse


<h4 align="center">
  <a href="https://mhgn-hoarding-gateway.vercel.app">Hoarding Gateway Vercel Sepolia Testnet</a> |
  <a href="https://moneyhoardersglobal.net">M.H.G.N Official Website</a>
</h4>
<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date Next 13 site being integrated with SE2.

M.H.G.N 

⚙️ Built using NextJS, Tailwind, Hardhat, Wagmi, and Typescript.


## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with M.H.G.N Hoarderverse, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/moneyhoardersglobalnetwork/mhgn-hoarderverse.git
cd mhgn-hoarderverse
yarn install
```



2. Open a terminal, start the Hoarderverse app frontend:

//We recommend you run this before next command to update the browserlist
npx update-browserslist-db@latest

You may see a warning or error message like this
Browserslist: caniuse-lite is outdated. Please run next command npm update caniuse-lite browserslist

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.






## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
ToDo's
????////
# Vercel

yarn vercel:yolo //Deploys to production and skips linting must delete project to redeploy try deploying to production with (yarn vercel:yolo --prod) command

# Github pushing

Git Hub Staging, Commiting, Pushing
//Commands for updating repo on github(Build this out)

//Check remote origin

git remote -v

git remote set-url origin https://github.com/moneyhoardersglobalnetwork/mhgn-hoarderverse.git // Here you set the repo url

git add . //adds modified files to commit# mhgn-hoarding-gateway

git commit -m "update from local" --no-verify // Commit your changes to be pushed to repo

Use the --no-verify option to skip git commit hooks, e.g. git commit -m "commit message" --no-verify . When the --no-verify option is used, the pre-commit and commit-msg hooks are bypassed. You can also use the -n option, which is short for --no-verify .

git push //push to repo //Push updates to repo (main) 


ToDo's
//Push this repo to Github 
//Update package.json and rerun yarn install
//Integrate Scaffold-eth2 packages into package.json
//Add Connect button to Hoarderverse frontend