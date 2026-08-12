import { useState } from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom";
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Services from './Pages/Services';
// import Students from './Pages/Students';
// import AllStudent from "./Pages/AllStudent";
// import AddStudent from "./Pages/AddStudent";
// import StudentDetails from "./Pages/StudentDetails";
import NotFoundPage from "./Pages/NotFoundPage";
// import Navigation from './Pages/Navigation';
// import Login from './Pages/Login';
import './App.css';
import Products from './ProductPages/Products';
import ProductDetails from './ProductPages/ProductDetails';
import ProductNav from './ProductPages/ProductNav';
import Home from './ProductPages/Home';
import About from './ProductPages/About';
import Contact from './ProductPages/Contact';
import './ProductPages/product.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>React Dom</h1>
      
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
      </BrowserRouter> */}
      <h1>Product Management</h1>
      <BrowserRouter>
      <ProductNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Products' element={<Products />} />
       <Route path="/products/:brand" element={<ProductDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
