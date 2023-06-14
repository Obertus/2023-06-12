import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1grow/FlexH1grow'
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme'
import MemeForm from './components/fonctional/MemeForm/MemeForm'
import Header from './components/ui/Header/Header'
import Footer from './components/ui/Footer/Footer'
import datas from "./db.json"

const appInitialState = {
  images: [],
  memes: [],
  current: emptyMeme
}

const App = () => {
  const [state, setstate] = useState(appInitialState)

  useEffect(() => {
    setstate({ ...state, ...datas })
  }, [])

  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewer
            meme={state.current}
            image={state.images.find(img => {
              return img.id === state.current.imageId
            })}
            basePath=''
          />
          <MemeForm
            images={datas?.images}
            current={state.current}
            onMemeChange={(meme) => {
              setstate({ ...state, current: meme })
            }} />
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App