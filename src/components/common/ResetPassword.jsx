import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const token = useParams().token;
  const password = watch("password");

  const submitHandler = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const obj = {
      password: data.password,
      confirmPassword: data.confirmPassword,
      token: token,
    };
    
    try {
      const res = await axios.post("/resetpassword", obj);
      console.log(res.data);
      alert("Password reset successful!");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >

      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#005555", marginBottom: "20px" }}>
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* Password Input */}
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#7f8c8d",
                marginBottom: "5px",
              }}
            >
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            />
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {errors.password?.message}
            </p>
          </div>

          {/* Confirm Password Input */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#7f8c8d",
                marginBottom: "5px",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            />
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#005555",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 6px rgba(52, 152, 219, 0.2)",
            }}
          >
            Reset Password
          </button>
        
        </form>
      </div>
    </div>
  );
};