import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import headerBackground from "../../assets/img/backgroundForLogin.jpg";
import background from "../../assets/img/backgroundForLogin2.jpg";
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log(data);

    data.roleId = '67c88cda29c2dbc8ef744954'
    const res = await axios.post("/user",data)
    console.log(res);


    if (res.status == 200) {
      toast.success('Signed up Successfully', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      setTimeout(() => {
        navigate("/login")
      }, 4000);
    }
    
  };

  const validationSchema = {
    firstNameValidator: {
      required: {
        value: true,
        message: "First name is required*",
      },
      maxLength: {
        value: 20,
        message: "First name should be less than 20 characters*",
      },
    },
    lastNameValidator: {
      required: {
        value: true,
        message: "Last name is required",
      },
      maxLength: {
        value: 20,
        message: "Last name should be less than 20 characters*",
      },
    },
    emailValidator: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please provide a valid email",
      },
    },
    contactValidator: {
      required: {
        value: true,
        message: "Contact number is required",
      },
      pattern: {
        value: /^(?:\+91|0)?[6-9]\d{9}$/,
        message: "Enter a valid contact number",
      },
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must contain at least 8 characters*",
      },
      maxLength: {
        value: 30,
        message: "Password should not be greater than 30 characters",
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
        message: "Password must have a special character, an uppercase letter, and three integers",
      },
    },
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "Please confirm your password",
      },
      validate: (value) => value === data?.password || "Password doesn't match",
    },
    genderValidator: {
      required: {
        value: true,
        message: "Please select your gender"
      }
    },
    
    userTypeValidator: {
      required: {
        value: true,
        message: "Select user type",
      },
    },
    agreeTCValidator: {
      required: {
        value: true,
        message: "Agree to terms and conditions",
      },
    },
  };


  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #e1e5e8',
    borderRadius: '6px',
    backgroundColor: '#f7f9fa',
    color: '#34495e',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s',
    ':focus': {
      borderColor: '#3498db',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)'
    }
  };
  
  const errorStyle = {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '4px',
    height: '16px'
  };
  
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
          <div style={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
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
        <div style={{ padding: '30px 25px 25px' }}>
        <ToastContainer
          position="top-left"
          autoClose={3000}
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
          <h2 style={{
            color: '#34495e',
            textAlign: 'center',
            marginBottom: '25px',
            fontSize: '22px',
            fontWeight: '600'
          }}>
            Join Us Today!
          </h2>
  
          <form onSubmit={handleSubmit(submitHandler)}>
            
            {/* First Name */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                style={inputStyle}
                {...register("firstName", validationSchema.firstNameValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.firstName?.message}</p></span>
            </div>

            {/* Last Name */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                style={inputStyle}
                {...register("lastName", validationSchema.lastNameValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.lastName?.message}</p></span>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                style={inputStyle}
                {...register("email", validationSchema.emailValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.email?.message}</p></span>
            </div>

            {/* Password */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Create password"
                style={inputStyle}
                {...register("password", validationSchema.passwordValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.password?.message}</p></span>
            </div>

            {/* Confirm Password
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                style={inputStyle}
                {...register("confirmPassword", validationSchema.confirmPasswordValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.confirmPassword?.message}</p></span>
            </div> */}

            {/* Contact Number */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                style={inputStyle}
                {...register("contact", validationSchema.contactValidator)}
              />
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.contact?.message}</p></span>
            </div>

            {/* Gender */}
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Gender
              </label>
              <select
                style={inputStyle}
                {...register("gender", validationSchema.genderValidator)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              <span><p style={{color:"#e74c3c", fontSize: '12px'}}>{errors.gender?.message}</p></span>
            </div>

            

            
  
            {/* User Type
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                User Type
              </label>
              <select
                style={{ 
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1em'
                }}
                {...register("userType", validationSchema.userTypeValidator)}
              >
                <option value="buyer">Buyer/Renter</option>
                <option value="owner">Property Owner</option>
                <option value="agent">Real Estate Agent/Broker</option>
              </select>
              <span><p style={errorStyle}>{errors.userType?.message}</p></span>
            </div> */}
  
            {/* Location
            <div style={{ marginBottom: '8px' }}>
              <label style={{ display: 'block', marginBottom: '6px', color: '#7f8c8d', fontSize: '14px' }}>
                Location (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter location"
                style={inputStyle}
                {...register("location")}
              />
            </div> */}
  
            {/* Terms Checkbox */}
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="agreeToTerms"
                style={{ 
                  width: '16px',
                  height: '16px',
                  marginRight: '8px',
                  accentColor: '#3498db'
                }}
                {...register("agreeToTandC", validationSchema.agreeTCValidator)}
              />
              <label htmlFor="agreeToTerms" style={{ color: '#7f8c8d', fontSize: '14px' }}>
                I agree to the Terms & Conditions
              </label>
            </div>
            <span><p style={errorStyle}>{errors.agreeToTandC?.message}</p></span>
  
            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: '#3498db',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)'
              }}
            >
              Sign Up
            </button>
          </form>
  
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#7f8c8d',
            fontSize: '14px'
          }}>
            <p>Already have an account?{' '}
              <Link to="/login" style={{
                color: '#3498db',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  

};