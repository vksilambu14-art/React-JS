import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const handleLogin = (event) => {
    event.preventDefault();

    if (email && password) {

      alert("Login Successful!");

    
      navigate("/");
    }
  };
   const goToStudents = () => {

   
    navigate("/students");

  };
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login</h1>

        <p>
          Login to your Student Portal
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className="btn login-btn"
          >
            Login
          </button>

        </form>

        <button
          className="btn secondary-btn full-btn"
          onClick={goToStudents}
        >
          Go to Students
        </button>

      </div>

    </div>
  );
}
