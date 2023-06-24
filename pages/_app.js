import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../shared/UI/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const chakraTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        marginBottom: "24px",
      },
    },
  },
});

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
