import React from 'react'
import colorOptions from './ColorOption'

const ColorsTheme = (props) => {
    return (
        <>
            <div className="color-swatches">
                {
                    colorOptions.map((colorVal, index) => {
                        return <span key={index} className='colors' style={{ backgroundColor: colorVal.color }} onClick={props.changeColor}></span>
                    })
                }

            </div>
        </>
    )
}

export default ColorsTheme
