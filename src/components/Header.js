import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import { Link } from "react-router-dom";

export function Header() {
    let { path, url } = useRouteMatch();
    var style;
    path !== '/' ? style = { justifyContent: 'space-between' } : style = { placeContent: 'center' };
    console.log(path);
    return (
        <div id="Header" style={style}>
            <div className='top_left'>
            </div>
            <div className='top_right'>
                {path !== '/' ?
                    (<div className='logout'>
                        <div className='cart_icon'></div>
                        <button className='button_des'> logout </button>
                    </div>
                    )
                    :
                    (<div></div>)}
            </div>
        </div>
    );
}
export default Header;