import React from 'react'
import style from "./Button.module.css"
import PropTypes from 'prop-types'


const Button = (props) => {
    console.log("props : ", props)
    return (
        <button className={style.Button}>
            {props.children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.any.isRequired
}

export default Button