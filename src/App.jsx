import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/headers/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
