import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState();

  const submitHandler = (data) => {
    console.log(data);
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

  return (
    <>
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
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Sign Up</h2>
          <form onSubmit={handleSubmit(submitHandler)}>
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.firstName?.message}</p></span>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("firstName", validationSchema.firstNameValidator)}
              />
            </div>
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.lastName?.message}</p></span>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("lastName", validationSchema.lastNameValidator)}
              />
            </div>
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
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.contact?.message}</p></span>
            <div className="mb-3">
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("contact", validationSchema.contactValidator)}
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
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.confirmPassword?.message}</p></span>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("confirmPassword", validationSchema.confirmPasswordValidator)}
              />
            </div>
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.userType?.message}</p></span>
            <div className="mb-3">
              <select
                name="userType"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("userType", validationSchema.userTypeValidator)}
              >
                <option value="buyer">Buyer/Renter</option>
                <option value="owner">Property Owner</option>
                <option value="agent">Real Estate Agent/Broker</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="location"
                placeholder="Location (Optional)"
                style={{ width: '100%', padding: '8px', border: '1px solid #FFFFFF', backgroundColor: '#19191C', color: '#FFFFFF', borderRadius: '4px' }}
                {...register("location")}
              />
            </div>
            <span><p style={{ color: '#FFFFFF', fontSize: '12px' }}>{errors.agreeToTandC?.message}</p></span>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                style={{ marginRight: '8px' }}
                {...register("agreeToTandC", validationSchema.agreeTCValidator)}
              />
              <label htmlFor="agreeToTerms" style={{ color: '#FFFFFF' }}>I agree to the Terms & Conditions</label>
            </div>
            <button
              type="submit"
              style={{ width: '100%', backgroundColor: '#DF3D6A', color: '#FFFFFF', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              Sign Up
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <p style={{ color: '#FFFFFF' }}>Already have an account? <Link to="/login" style={{ color: '#DF3D6A', fontWeight: 'bold' }}>Log In</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};