import { useEffect } from 'react'
import { MemeFormStoredConnected } from './components/fonctional/MemeForm/MemeForm'
import { MemeSVGViewerStoredConnected } from './components/ui/MemeSVGViewer/MemeSVGViewerStoredConnected'
import FlexH1Grow from './components/layout/FlexH1grow/FlexH1grow'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import store from './store/store'
import { fetchAllRessources } from './store/ressourcesSlice'
import {
  Route,
  Routes
} from 'react-router-dom'
import Editor from './pages/Editor'


const App = () => {

  useEffect(() => {
    store.dispatch(fetchAllRessources())
  }, [])

  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<div><h1>Hello a tous</h1></div>} />
          <Route path='/thumbnail' element={<div>thumbnail</div>} />
          {/* <Route path='/meme' element={<FlexH1Grow>
            <MemeSVGViewerStoredConnected basePath='' />
            <MemeFormStoredConnected />
          </FlexH1Grow>} /> */}
          <Route path='/meme' element={<Editor/>} />
          <Route path='/meme/:id' element={<Editor/>} />
        </Routes>

        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App

