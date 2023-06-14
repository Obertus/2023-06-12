import { emptyMeme } from 'orsys-tjs-meme'
import { useEffect, useState } from 'react'
import { MemeFormStoredConnected } from './components/fonctional/MemeForm/MemeForm'
import { MemeSVGViewerStoredConnected } from './components/fonctional/MemeSVGViewer/MemeSVGViewerStoredConnected'
import FlexH1Grow from './components/layout/FlexH1grow/FlexH1grow'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
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
          {/* <MemeSVGViewer
            meme={state.current}
            image={state.images.find(img => {
              return img.id === state.current.imageId
            })}
            basePath=''
          /> */}
          <MemeSVGViewerStoredConnected basePath=''/>
          <MemeFormStoredConnected/>
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App

