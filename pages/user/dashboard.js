import { ChakraProvider, Flex} from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
import PageShell from '../../components/pageUser/pageshell/App'
import Settings from '../../components/pageUser/viewSettings/App'
import Support from '../../components/pageUser/viewSupport/App'
import { useState } from "react"
import * as React from 'react'

export default function Home() {
  const [view, setView] = useState("settings");

  function handleChange(newView) {
    setView(newView);
  }

  let display;
  switch (view) {
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
      <NavBar />
      <Flex>
        <PageShell view={view} onChange={handleChange}/>
        {display}
      </Flex>
    </ChakraProvider>
  )
}
