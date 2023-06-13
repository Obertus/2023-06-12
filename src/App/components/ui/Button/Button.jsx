import React, { useState, useEffect } from 'react'
import style from "./Button.module.css"
import PropTypes from 'prop-types'


//quand click ajout clicker puis 800ms retrait

const Button = (props) => {
    const [isClicked, setisClicked] = useState(false)

    useEffect(() => {
        let to = undefined;
        // console.log(`value post clicked`, isClicked);
        if (isClicked) {
            setTimeout(() => setisClicked(false), 800)
        }
        return () => {
            clearTimeout(to);
        }
    }, [isClicked])

    // console.log("props : ", props)
    return (
        <button
            type={props.type}
            className={`
                ${style.Button}  
                btn${undefined !== props.className ? ' ' + props.className : ''} 
                ${isClicked ? style.clicked : ''}
            `}
            onClick={(evt) => {
                setisClicked(true)
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
    isClicked: PropTypes.bool,
}

Button.defaultProps = {
    type: 'button',
    // bgColor: 'yellow',
    onClick: () => { console.log('hello') }
}

export default Button