import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const shardeum = {
  id: 8081,
  name: "Shardeum",
  network: "Shardeum Liberty 2.X",
  nativeCurrency: {
    decimals: 18,
    name: "Shardeum",
    symbol: "SHM",
  },
  rpcUrls: {
    default: { http: ["https://liberty20.shardeum.org"] },
  },
  blockExplorers: {
    default: {
      name: "explorer-liberty20",
      url: "https://explorer-liberty20.shardeum.org",
    },
  },
};

const { chains, provider } = configureChains(
  [polygonMumbai, shardeum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Favourite Number App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
