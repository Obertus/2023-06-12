import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer, { saveCurrent, update } from './currentSlice'
import ressourcesReducer, { fetchAllRessources } from './ressourcesSlice'
import {emptyMeme} from 'orsys-tjs-meme'
const store=configureStore({
    reducer:combineReducers({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})
// store.subscribe(()=>{
//     console.trace(store.getState())
// })
// store.dispatch({type:'toto'})
//  store.dispatch(update(emptyMeme))
// store.dispatch({type:'current/update', payload:{titre:'coucou'}})
// store.dispatch({type:'current/clear'})
// store.dispatch(fetchAllRessources())
// store.dispatch(saveCurrent({
//     titre: "titi",
//     text: "",
//     x: 0,
//     y: 20,
//     fontWeight: "500",
//     fontSize: 20,
//     underline: false,
//     italic: true,
//     imageId: -1,
//     color: "#000000",
//     frameSizeX: 0,
//     frameSizeY: 0,
//     id: 9
//   }))

export default store