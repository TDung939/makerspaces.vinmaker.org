
import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Login from '../components/pageLogin/App'
import Banner from '../components/banner/App'
import Footer from '../components/footer/App'



export default function Home() {
  return (
    <ChakraProvider>
        {/* <Banner /> */}
        <NavBar />
        <Login />
        <Footer />
    </ChakraProvider>
  )
}
