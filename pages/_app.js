import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../shared/UI/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../store/cart";

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
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
