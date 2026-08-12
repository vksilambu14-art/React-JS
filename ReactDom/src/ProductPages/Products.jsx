import React from 'react'
import { NavLink } from 'react-router-dom'
  
export default function Products() {
const products = [{
    id: 1,
    name: "OnePlus",
    brand: "oneplus",
    price: "₹39,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "OnePlus smartphone with powerful performance and fast charging.",
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    brand: "samsung",
    price: "₹44,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Samsung smartphone with an excellent display and powerful camera.",
  },
  {
    id: 3,
    name: "iPhone",
    brand: "Apple",
    price: "₹69,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Apple iPhone with premium design, excellent performance and camera.",
  },
  {
    id: 4,
    name: "Motorola",
    brand: "motorola",
    price: "₹29,999",
    availability: "Available",
    category: "Smartphone",
    description:
      "Motorola smartphone with clean Android experience and great battery.",
  },
  {
    id: 5,
    name: "Redmi",
    brand: "redmi",
    price: "₹19,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Redmi smartphone offering good performance at an affordable price.",
  },
  ]
  return (
    <div>
      <h1>Our Products</h1>
      <div className='product-container'>
        {products.map((e)=>{
          return (
            <div className="product-card" key={e.id}>
              <h2>{e.name}</h2>
            <p>
              <strong>Brand:</strong> {e.brand}
            </p>
             <p>
              <strong>Price:</strong> {e.price}
            </p>

            <p>
              <strong>Category:</strong> {e.category}
            </p>

            <p>
              <strong>Availability:</strong> {e.availability}
            </p>
          <NavLink to={`/products/${e.brand}`}> View Details</NavLink>

          </div>
        )})}
      </div>
    </div>
  )
}
