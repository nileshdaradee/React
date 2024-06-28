import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h1>React With Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
