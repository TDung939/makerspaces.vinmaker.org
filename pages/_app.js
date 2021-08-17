import { ChakraProvider, theme } from "@chakra-ui/react"
import {AuthProvider} from '../context/AuthContext'
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp