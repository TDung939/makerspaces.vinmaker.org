import { ChakraProvider, theme } from "@chakra-ui/react"
import 'react-modal-video/css/modal-video.css';
import {AuthProvider} from '../context/AuthContext'
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