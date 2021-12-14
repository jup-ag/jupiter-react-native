# Jupiter Core React Native example
![1*cXNgzu0Pvj4HwOLw4Akwqg](https://user-images.githubusercontent.com/34560707/145749257-e48cb199-521b-476e-9d81-f79bb45ef834.png)

<p align="center">
  <a href="https://jup.ag">Jupiter Aggregator (jup.ag)</a>
  <br/>
  The best swap aggregator on Solana.  Built for smart traders who like money.
</p>
<br/>

## Integrate with React instead?
The quickest way to integrate Jupiter with your UI, use [Jupiter React Hook](https://www.npmjs.com/package/@jup-ag/react-hook) instead
## NodeJS or building your own library??
Checkout [Jupiter Core Example](https://github.com/mercurial-finance/jupiter-core-example)

## Getting Started
 In `App.tsx`, you are greeted with `<CoreExample />` and `<HookExample />`.
 - `<CoreExample />` is a simple example of how you can interface with Jupiter Core library
 - `<HookExample />` is a abstracted interface of `Jupiter Core Library` via [@jup-ag/react-hook](https://www.npmjs.com/package/@jup-ag/react-hook)`.

1. Checkout Expo getting started docs [here](https://docs.expo.dev/get-started/installation/) and setup your iOS or Android sims
2. Add a `.env` to root
3. Populate these value
```
cluster=devnet
WALLET_PRIVATE_KEY=<wallet private key> ## or set it up in src/constants
```
4. `npm i`
5. `npm start`
