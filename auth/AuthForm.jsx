import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FormField } from "./FormField";
import { SocialButton } from "./SocialButton";
import styles from "./Auth.module.css";

export const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isLogin = type === "login";
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Simulate login logic (replace with actual API call)
      try {
        // Example: Send login request to your backend
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);

          // Navigate to the dashboard
          navigate("/dashboard");
        } else {
          console.error("Login failed:", response.statusText);
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    } else {
      // Handle signup logic (if needed)
      console.log("Signing up with:", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={isLogin ? styles.loginForm : styles.registrationForm}
    >
      <h2 className={styles.formTitle}>
        {isLogin ? "Login" : "Create an account"}
      </h2>

      <div className={styles.formFields}>
        {/* Email Field */}
        <FormField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          type="email"
        />

        {/* Password Field */}
        <FormField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          showForgot={isLogin} // Show "Forgot?" only for login
        />
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.primaryButton}>
          {isLogin ? "Login now" : "Create account"}
        </button>

        {/* Switch Between Login and Signup */}
        <div className={styles.switchAuth}>
          <span className={styles.switchText}>
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
          </span>
          <button
            type="button"
            className={styles.switchLink}
            onClick={() => {
              // Navigate to the other form
              navigate(isLogin ? "/auth/signup" : "/auth/login");
            }}
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;