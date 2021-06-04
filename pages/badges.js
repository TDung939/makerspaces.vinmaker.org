import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import Hero from '../components/hero/App'
import Features from '../components/features/App'
import Testimonials from '../components/testimonials/App'
import Footer from '../components/footer/App'
import Stats from '../components/stats/App'
import Cta from '../components/cta/App'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />

      <Footer />
    </ChakraProvider>
  )
}
