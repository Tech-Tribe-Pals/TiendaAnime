import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './components/Header'
import './App.css'
import Detail from './pages/Detail'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/products' element={ <Products /> } />
    <Route path='/products/:id' element={ <Detail /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
