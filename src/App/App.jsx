import { useEffect } from 'react'
import { MemeFormStoredConnected } from './components/fonctional/MemeForm/MemeForm'
import { MemeSVGViewerStoredConnected } from './components/fonctional/MemeSVGViewer/MemeSVGViewerStoredConnected'
import FlexH1Grow from './components/layout/FlexH1grow/FlexH1grow'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import store from './store/store'
import { fetchAllRessources } from './store/ressourcesSlice'


const App = () => {

  useEffect(() => {
    store.dispatch(fetchAllRessources())
  }, [])

  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewerStoredConnected basePath=''/>
          <MemeFormStoredConnected/>
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App

