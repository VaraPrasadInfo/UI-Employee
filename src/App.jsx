
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeComponent from './components/ListEmployeComponent'
import EmployeComponent from './components/EmployeComponent'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/> 
    <Routes>
      {/* //http://localhost:3000/ */}
<Route path='/' element={<ListEmployeComponent/>}></Route>
{/* //http://localhost:3000/employees */}
<Route path='/employees' element={<ListEmployeComponent/>}></Route>
{/* //http://localhost:3000/add-employee */}
<Route path='/add-employee' element={<EmployeComponent/>}></Route>
{/* //http://localhost:3000/update-employee/1 */}
<Route path='/update-employee/:id' element={<EmployeComponent/>}></Route>


    </Routes>
   
     <FooterComponent/>
     </BrowserRouter>
        </>
  )
}

export default App
