import React, { useEffect } from 'react'
import {
    useParams
} from 'react-router-dom'
import FlexH1Grow from '../components/layout/FlexH1grow/FlexH1grow'
import { MemeSVGViewerStoredConnected } from '../components/ui/MemeSVGViewer/MemeSVGViewerStoredConnected'
import { MemeFormStoredConnected } from '../components/fonctional/MemeForm/MemeForm'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/currentSlice'
import { emptyMeme } from 'orsys-tjs-meme'

export default function Editor() {
    const d = useDispatch()
    const memes = useSelector(s => s.ressources.memes)
    const params = useParams()

    useEffect(() => {
        if (undefined !== params.id) {
            const toViewMeme = memes.find(m => m.id === Number(params.id))
            if (undefined === toViewMeme) {

            } else {
                d(update(toViewMeme))
            }
        } else {
            d(update(emptyMeme))
        }
    }, [params, memes])

    return (
        <FlexH1Grow>
            <MemeSVGViewerStoredConnected basePath='' />
            <MemeFormStoredConnected />
        </FlexH1Grow>
    )
}
