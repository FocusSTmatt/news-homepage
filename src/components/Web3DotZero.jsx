import React from 'react'
import '../styles/web3dotzero.css'
import desktopImage from '../assets/images/image-web-3-desktop.jpg'
import mobileImage from '../assets/images/image-web-3-mobile.jpg'
import MediaQuery from 'react-responsive'

function Web3DotZero() {
  return (
    <div className='Web3DotZero'>
      <MediaQuery query='(min-width: 768px)'>
        <img className='desktopImage' src={desktopImage} />
      </MediaQuery>
      <MediaQuery className='mobileImage' query='(max-width: 769px)'>
        <img className='mobileImage' src={mobileImage} />
      </MediaQuery>
      <div className='hero-bottom-ctn'>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className='hero-read-more'>
          <p>We dive into the next evolution of the web that
            claims to put the power of the platforms back into
            the hands of the people. But is it really fullfilling
            it&apos;s promise? 
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Web3DotZero