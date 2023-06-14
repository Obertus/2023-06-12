import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'

export const MemeSVGViewerStoredConnected = (props) => {
    const storeProps = useSelector(storeState => {
        return {
            meme: storeState.current, image: storeState.ressources.images.find(img => {
                return img.id === storeState.current.imageId
            })
        }
    })

    return (
        <MemeSVGViewer
            {...props}
            {...storeProps}
        />)
}