import '../styles/bottombar.css'
import RetroPcImage from '../assets/images/image-retro-pcs.jpg'
import ToplaptopsImage from '../assets/images/image-top-laptops.jpg'
import GamingImage from '../assets/images/image-gaming-growth.jpg'

function BottomBar() {
  return (
    <div className='BottomBar'>
        <div className='item-ctn'>
            <img src={RetroPcImage}></img>
            <div className='text-ctn'>
                <h3>01</h3>
                <h4>Reviving Retro PC&apos;s</h4>
                <p>What happens when old PC&apos;s are given modern upgrades?</p>
            </div>
        </div>

        <div className='item-ctn'>
            <img src={ToplaptopsImage}></img>
            <div className='text-ctn'>
                <h3>02</h3>
                <h4>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets</p>
            </div>
        </div>

        <div className='item-ctn'>
            <img src={GamingImage}></img>
            <div className='text-ctn'>
                <h3>03</h3>
                <h4>Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar