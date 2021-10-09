import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react"
import {AuthProvider} from '@/context/AuthContext'
import { QueryClientProvider, QueryClient } from "react-query";
import "@fontsource/space-mono"
import "@fontsource/work-sans"
import NextNprogress from 'nextjs-progressbar';

export const newTheme = {
  ...theme,
  shadows: {...theme.shadows, outline:'0 !important'},
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Work sans",
      },
    }),
  },
};

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
       <CSSReset />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NextNprogress
            color="#2A5FFF"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp