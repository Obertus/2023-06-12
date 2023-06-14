import { useEffect } from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'
import FlexV3Grow from './components/layout/FlexV3grow/FlexV3grow'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import Editor from './pages/Editor'
import { fetchAllRessources } from './store/ressourcesSlice'
import store from './store/store'
import  { MemeThumbnailStoredConnected } from './components/ui/MemeThumbnail/MemeThumbnail'


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
          <Route path='/thumbnail' element={<MemeThumbnailStoredConnected />} />
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

