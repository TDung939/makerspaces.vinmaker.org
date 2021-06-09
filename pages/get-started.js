import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Hero from '../components/pageGetStarted/hero/App'
import Footer from '../components/footer/App'
import Steps from '../components/pageGetStarted/steps/App'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Steps />
      <Footer />
    </ChakraProvider>
  )
}
