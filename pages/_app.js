import { ChakraProvider, theme } from "@chakra-ui/react"
import 'react-modal-video/css/modal-video.css';
import {AuthProvider} from '../services/auth'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp