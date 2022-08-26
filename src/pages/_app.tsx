import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";

import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "../RelayEnvironment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
