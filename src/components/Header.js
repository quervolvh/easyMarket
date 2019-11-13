import React from 'react';
export function Header() {
    return (
        <div id="Header">
            <div class='top_left'>
            </div>
            <div class='top_right'>
                <div class='cart'></div>
                <div class='logout'>
                    <div class='user'></div>
                    <button class='button_des'> logout </button>
                </div>
            </div>
        </div>
    );
}
export default Header;