import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'

const MemeThumbnail = (props) => {
  return (
    <div style={style.MemeThumbnail} data-testid="MemeThumbnail">{props.children}</div>
  )
}

MemeThumbnail.PropTypes = {
  children: PropTypes.any.isRequired,
}

export default MemeThumbnail