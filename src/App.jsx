import './App.css'
import BottomBar from './components/BottomBar'
import NavBar from './components/NavBar'
import New from './components/New'
import Web3DotZero from './components/Web3DotZero'

function App() {
 

  return (
    <div className="flex">
      <div className='App'>
        <NavBar />
        <div className='hero'>
          <Web3DotZero />
          <New />
        </div>
        <BottomBar />
      </div>
      </div>
  )
}

export default App
