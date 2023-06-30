import '../styles/navbar.css'
import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { IoIosMenu } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

function Navbar() {
    const [MenuOpen, setMenuOpen] = useState(false);
    
    function openMenu() {
        if (MenuOpen) {
            return 'mobile-nav'
        } else {
            return 'mobile-nav-close'
        }
    }

    function handleClick(){
        setMenuOpen(!MenuOpen)
    }

  return (
    <>
    <div className="Navbar">
        <img className='logo' src={logo} />
        <IoIosMenu className='hamburger-icon' onClick={() => handleClick()} />
        <nav className='desktop-nav'>
            <a>Home</a>
            <a>New</a>
            <a>Popular</a>
            <a>Trending</a>
            <a>Categories</a>
        </nav>
    </div>

<div className={openMenu()}>
    <nav>
    < RxCross1 onClick={() => handleClick()} className='cross slide-in-right'/>
        <a>Home</a>
        <a>New</a>
        <a>Popular</a>
        <a>Trending</a>
        <a>Categories</a>   
    </nav>
</div>
</>
  )
}

export default Navbar