import React from 'react'
import style from "./Button.module.css"
import PropTypes from 'prop-types'


const Button = (props) => {
    console.log("props : ", props)
    return (
        <button
            type={props.type}
            className={`${style.Button} btn${
                undefined!==props.className?' '+props.className:''
            }`}
            onClick={(evt) => {
                if (undefined !== props.onClick && typeof props.onClick === 'function') {
                    props.onClick('click');
                }
            }}>
            {props.children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    // bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    // style: PropTypes.object,
    className: PropTypes.oneOf(['primary', 'error']),
}

Button.defaultProps = {
    type: 'button',
    // bgColor: 'yellow',
    onClick: () => { console.log('hello') }
}

export default Button