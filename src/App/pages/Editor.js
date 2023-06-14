import React from 'react'
import {
    useParams
} from 'react-router-dom'
import FlexH1Grow from '../components/layout/FlexH1grow/FlexH1grow'
import { MemeSVGViewerStoredConnected } from '../components/ui/MemeSVGViewer/MemeSVGViewerStoredConnected'
import { MemeFormStoredConnected } from '../components/fonctional/MemeForm/MemeForm'

export default function Editor() {
    console.log(useParams())
    return (
        <FlexH1Grow>
            <MemeSVGViewerStoredConnected basePath='' />
            <MemeFormStoredConnected />
        </FlexH1Grow>
    )
}
