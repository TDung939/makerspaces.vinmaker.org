
import Banner from '../components/banner/App'
import NavBar from '../components/navbar/App'
import Hero from '../components/pageHome/hero/App'
import Features from '../components/pageHome/features/App'
import Testimonials from '../components/pageHome/testimonials/App'
import Footer from '../components/footer/App'
import Stats from '../components/pageHome/stats/App'
import Cta from '../components/pageHome/cta/App'
import { fetchAPI } from '../lib/api'

export default function Home({badges_num, machines_num, makerspaces_num}) {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Stats badges_num={badges_num}  machines_num={machines_num} makerspaces_num={makerspaces_num}/>
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [badges_num, machines_num, makerspaces_num] = await Promise.all([
    fetchAPI("/badges/count"), 
    fetchAPI("/machines/count"), 
    fetchAPI("/makerspaces/count")
  ]);

  return {
    props: { badges_num, machines_num, makerspaces_num },
    revalidate: 1,
  };
}

