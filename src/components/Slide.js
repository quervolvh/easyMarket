import React from 'react';

export function Slide(props) {
    const { value } = props;
    console.log(props);
    const style = {
        transform: `translate(${value}px, 0px)`
    }
    console.log(style)

    return (
        <div id='SliderParent'>
            <div id='slideOverall'>
                <div className='abs left' onClick={props.leftClick}>  </div>
                <div className='abs right' onClick={props.rightClick}>  </div>

                <div className='slide zero' style={style}>
                </div>

                <div className='slide one' style={style}>
                </div>

                <div className='slide two' style={style}>
                </div>

            </div>
            <div id='rightNoSlide'>

            </div>
        </div>
    )

}
export default Slide;