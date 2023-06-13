import React from 'react'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1grow/FlexH1grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm from './components/MemeForm/MemeForm'
import Header from './components/ui/Header/Header'
import Footer from './components/ui/Footer/Footer'

const App = () => {
  console.log(`emptyMeme`, emptyMeme);
  return (
    <div style="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewer name={emptyMeme} image={undefined} basePath='' />
          <MemeForm />
        </FlexH1Grow>
        <Footer/>
      </FlexV3Grow>
    </div>
  )
}

export default App