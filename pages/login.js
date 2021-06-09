
import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Login from '../components/pageLogin/App'

import Footer from '../components/footer/App'



export default function Home() {
  return (
    <ChakraProvider>
        <NavBar />
        <Login />
        <Footer />
    </ChakraProvider>
  )
}