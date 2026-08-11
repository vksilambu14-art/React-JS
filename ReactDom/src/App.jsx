import { useState } from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Students from './Pages/Students';
import AllStudent from "./Pages/AllStudent";
import AddStudent from "./Pages/AddStudent";
import StudentDetails from "./Pages/StudentDetails";
import NotFoundPage from "./Pages/NotFoundPage";
import Navigation from './Pages/Navigation';
import Login from './Pages/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Dom</h1>
      
      <BrowserRouter>
<Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Students' element={<Students />} >
            <Route path='AllStudent' element={<AllStudent />} />
            <Route path='AddStudent' element={<AddStudent />} />
            <Route path='StudentDetails' element={<StudentDetails />} />
            <Route path='Login' element={<Login />} />
          </Route>
          
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
