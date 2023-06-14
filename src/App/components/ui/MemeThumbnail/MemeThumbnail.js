import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import style from './MemeThumbnail.module.css'
//facultatif si non utilisation des js de botsstrap
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Link } from "react-router-dom"

const MemeThumbnail = (props) => {


  console.log('MemeThumbnail', props)
  return (<div className={style.MemeThumbnail} data-testid="MemeThumbnail">
    {props?.memes?.map((meme, i) => <div key={`meme-thumbnail-${i}`}>
      <Link to={`/meme/${meme.id}`}>
        <MemeSVGViewer
          meme={meme}
          image={props.images.find(image => (image.id === meme.imageId))} 
          basePath=''
        />
        <br />
        {meme.titre}
      </Link>
    </div>
    )}
  </div>
  )
}

// MemeThumbnail.propTypes = {
//   // children: PropTypes.any.isRequired,
// }

export default MemeThumbnail



export const MemeThumbnailStoredConnected = (props) => {
  const storeProps = useSelector(storeState => {
    return {
      memes: storeState.ressources.memes,
      images: storeState.ressources.images
    }
  })

  return (
    <MemeThumbnail
      {...props}
      {...storeProps}
    />)
}