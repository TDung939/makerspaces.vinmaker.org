import { ChakraProvider, Flex} from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import PageShell from '@/views/pageUser/pageshell/App'
import CompletedBadges from '@/views/pageUser/views/completed-badges/App'
import Settings from '@/views/pageUser/views/user-settings/App'
import Support from '@/views/pageUser/views/help-and-support/App'
import { useState } from "react"
import * as React from 'react'
import Seo from "@/components/Seo"

export default function Home() {
  const [view, setView] = useState("completed-badges");

  function handleChange(newView) {
    setView(newView);
  }

  let display;
  switch (view) {
    case "completed-badges":
      display = <CompletedBadges />;
      break;
    case "settings":
      display = <Settings />;
      break;
    case "support":
      display = <Support />;
      break;
    case "":
      display = (<>In Development</>);
      break;
  }
  return (
    <ChakraProvider>
      <Seo />
      <NavBar />
      <Flex maxW='7xl' mx='auto'>
        <PageShell view={view} onChange={handleChange} />
        {display}
      </Flex>
    </ChakraProvider>
  )
}
