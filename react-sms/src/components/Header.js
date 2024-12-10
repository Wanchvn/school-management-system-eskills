import React from 'react';
import './Header.css';



function Header(){
    return(
        <header>
        <header className='header'>
            <div className='logo'>
                <h2 className='flex p-6 text-white' style ={{fontWeight: 700}}>eduVerse</h2>
                <p className='p-4 text-white'>Help</p>
            </div>
            <div>
                <a href='./signin.html' className='signin'>Sign In</a>
            </div>
        </header>
       </header>
    )
}

export default Header;