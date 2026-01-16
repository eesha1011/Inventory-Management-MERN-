import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Users from './pages/Users'
import Inventory from './pages/Inventory'
import Expenses from './pages/Expenses'
import Settings from './pages/Settings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
