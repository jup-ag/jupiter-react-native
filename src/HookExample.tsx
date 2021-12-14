import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import fetch from 'cross-fetch';

// Jupiter Hook
import { TOKEN_LIST_URL } from "@jup-ag/core";
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
import { Connection, PublicKey } from '@solana/web3.js';

import { ENV, INPUT_MINT_ADDRESS, OUTPUT_MINT_ADDRESS, SOLANA_RPC_ENDPOINT, Token } from "./constants";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const connection = new Connection(SOLANA_RPC_ENDPOINT);

  return (
    <JupiterProvider connection={connection} cluster="mainnet-beta" userPublicKey={undefined}>
      {children}
    </JupiterProvider>
  )
}

const JupiterApp = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [inputMint] = useState<PublicKey>(new PublicKey(INPUT_MINT_ADDRESS))
  const [outputMint] = useState<PublicKey>(new PublicKey(OUTPUT_MINT_ADDRESS))

  useEffect(() => {
    // Fetch token list from Jupiter API
    fetch(TOKEN_LIST_URL[ENV])
      .then(response => response.json())
      .then(result => setTokens(result))
  }, [])

  const jupiter = useJupiter({
    amount: 1 * (10 ** 6), // 1 in lamports (USDC uses 6 decimals)
    inputMint,
    outputMint,
    slippage: 1, // 1% slippage
    debounceTime: 250, // debounce ms time before refresh
  })

  const {
    allTokenMints, // all the token mints that is possible to be input
    routeMap, // routeMap, same as the one in @jup-ag/core
    exchange, // exchange 
    refresh, // function to refresh rates
    lastRefreshTimestamp, // timestamp when the data was last returned
    loading, // loading states
    routes, // all the routes from inputMint to outputMint
    error,
  } = jupiter

  return (
    <>
      <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 24 }}>Hook example</Text>
      <Text>Number of tokens: {tokens.length}</Text>
      <Text>Number of input tokens {allTokenMints.length}</Text>
      <Text>Possible number of routes: {routes?.length}</Text>
      <Text>
        Best quote: {routes ? routes[0].outAmount : ''}
      </Text>
    </>
  )
}

const JupiterHook = () => {
  return (
    <Providers>
      <JupiterApp />
    </Providers>
  )
}

export default JupiterHook