import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'

export const MemeSVGViewerStoredConnected = (props) => {
    const storePropsCurrent = useSelector(s => s.current)

    const storePropsImage = useSelector(s => s.ressources.images)


    return (
        <MemeSVGViewer
            {...props}
            meme={storePropsCurrent}
            image={storePropsImage.find(img => {return img.id === storePropsCurrent.imageId})}
        />)
}