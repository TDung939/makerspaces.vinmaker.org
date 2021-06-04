import { ChakraProvider, theme } from "@chakra-ui/react"
import 'react-modal-video/css/modal-video.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp