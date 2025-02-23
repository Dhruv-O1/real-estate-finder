import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
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
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000000' }}>
      <div style={{ 
        backgroundColor: '#19191C', 
        color: '#FFFFFF', 
        padding: '24px', 
        borderRadius: '8px', 
        boxShadow: '0 0 25px 2px #DF3D6A', // Added shadow here
        width: '100%', 
        maxWidth: '480px',
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Login</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.email?.message}</p></span>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
              {...register("email", validationSchema.emailValidator)}
            />
          </div>
          <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.password?.message}</p></span>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
              {...register("password", validationSchema.passwordValidator)}
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#DF3D6A', color: '#FFFFFF', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <p style={{ color: '#FFFFFF' }}>Don't have an account? <Link to="/signup" style={{ color: '#DF3D6A', fontWeight: 'bold' }}>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};