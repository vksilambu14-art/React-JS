import React from 'react'
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
     <div className="not-found">

      <div className="error-number">
        404
      </div>

      <h1>Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="btn">
        Go Home
      </Link>

    </div>
  )
}
