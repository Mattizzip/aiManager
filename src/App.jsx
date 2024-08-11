import { useState } from 'react'
import  Login from './components/login/login.jsx'
import  Registration from './components/login/registration.jsx'
import MainPage from './components/main_page/main.jsx'
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Login />    
    </main> 
  )
}


