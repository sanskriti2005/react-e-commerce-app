import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Container fluid w='full'>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

      </Container>
    </>
  )
}

export default App
