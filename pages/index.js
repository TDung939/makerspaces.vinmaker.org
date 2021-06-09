import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Hero from '../components/pageHome/hero/App'
import Features from '../components/pageHome/features/App'
import Testimonials from '../components/pageHome/testimonials/App'
import Footer from '../components/footer/App'
import Stats from '../components/pageHome/stats/App'
import Cta from '../components/pageHome/cta/App'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      
      <Features />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />
    </ChakraProvider>
  )
}
