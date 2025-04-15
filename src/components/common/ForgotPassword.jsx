
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import headerBackground from "../../assets/img/backgroundForLogin.jpg";
import background from "../../assets/img/backgroundForLogin2.jpg";
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const ForgotPassword = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const forgotPasswordHandler =async()=>{
    alert(`Password reset link sent to ${email}`);
    console.log(email)
    const res = await axios.post("/forgotpassword", null, {
        params: { email } // Send email as URL query parameter
      })
    // const res = await axios.post("api/forgotpassword?email=" + email)
    console.log(res.data)
  }

  return (
    
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(5px)'
      }}></div>
  
      <div style={{
        width: '470px',
        maxWidth: '90%',
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header section */}
        <div style={{
          height: '160px',
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 85, 85, 0.7))'
          }}></div>
          
          {/* Logo */}
          <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#34495e'
            }}>
              RE<span style={{ color: '#3498db' }}>F</span>
            </div>
          </div>
        </div>
  
        {/* Form section */}
        <div style={{ padding: '40px 30px 30px' }}>
          <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                    />
        
          <h2 style={{ color: '#34495e', textAlign: 'center', marginBottom: '30px', fontSize: '22px', fontWeight: '600'
          }}>
            Good to See You Again!
          </h2>
          
          
          <div
          style={{
            marginTop: "10px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f7f9fa",
            textAlign: "left",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "14px",
              color: "#34495e",
              marginBottom: "5px",
            }}
          >
            Enter Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={forgotPasswordHandler}
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#005555",
              color: "white",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Send
          </button>
        </div>
      
  
  
           <div style={{
             textAlign: 'center',
             marginTop: '20px',
             color: '#7f8c8d',
             fontSize: '14px'
           }}>
             <p>Don't have an account?{' '}
               <Link to="/login" style={{
                color: '#005555',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


