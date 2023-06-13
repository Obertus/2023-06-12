import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.module.css'

const Header = (props) => {
  return (
    <div className={style.Header} data-testid="Header">
      Meme 
      </div>
  )
}

// Header.propTypes = {
//   // children: PropTypes.any.isRequired,
// }

export default Header