import React from 'react'
import { useParams,NavLink } from 'react-router-dom';

export default function ProductDetails() {
  console.log("hellos")
  const products = {
  oneplus: {
    name: "OnePlus",
    brand: "OnePlus",
    price: "₹39,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "OnePlus smartphone with powerful performance, AMOLED display and fast charging.",
  },

  samsung: {
    name: "Samsung Galaxy",
    brand: "Samsung",
    price: "₹44,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Samsung Galaxy smartphone with an excellent display, powerful processor and advanced camera.",
  },

  Apple: {
    name: "iPhone",
    brand: "Apple",
    price: "₹69,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Apple iPhone with premium design, excellent camera, powerful processor and smooth performance.",
  },

  motorola: {
    name: "Motorola",
    brand: "Motorola",
    price: "₹29,999",
    availability: "Available",
    category: "Smartphone",
    description:
      "Motorola smartphone with clean Android experience, good performance and long battery life.",
  },

  redmi: {
    name: "Redmi",
    brand: "Redmi",
    price: "₹19,999",
    availability: "In Stock",
    category: "Smartphone",
    description:
      "Redmi smartphone offering good performance, long battery life and excellent value for money.",
  },
}
  const { brand } = useParams();
  const product = products[brand];
  if (!product) {
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <p>The requested product does not exist.</p>

        <NavLink className="details-btn" to="/products">
          Back to Products
        </NavLink>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-card">
        <h1>{product.name}</h1>

        <div className="details-info">
          <p>
            <strong>Product Name:</strong> {product.name}
          </p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Price:</strong> {product.price}
          </p>

          <p>
            <strong>Availability:</strong> {product.availability}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Description:</strong> {product.description}
          </p>
        </div>

        <NavLink className="details-btn" to="/products">
          Back to Products
        </NavLink>
      </div>
    </div>
  )
}
