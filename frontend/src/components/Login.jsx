import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const loginModalRef = useRef(null); // Ref to control login modal
  const signupModalRef = useRef(null); // Ref to control signup modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const {
    register,
    handleSubmit,
    reset, // Add reset function
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/user/login", data);
      console.log(response.data); // Display successful login response
      setIsLoggedIn(true); // Set login status
      closeLoginModal(); // Close the modal after login
      reset(); // Reset the form fields
    } catch (error) {
      console.error("Login error:", error.response.data);
      alert("Login failed: " + error.response.data.message);
    }
  };

  const onSignupSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/user/signup", data);
      console.log(response.data); // Display successful signup response
      closeSignupModal(); // Close the modal after signup
      reset(); // Reset the form fields
    } catch (error) {
      console.error("Signup error:", error.response.data);
      alert("Signup failed: " + error.response.data.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login status
    alert("Logged out successfully"); // Show logout message
  };

  // Functions to handle modals
  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
    }
  };

  const closeLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.close();
      reset(); // Reset the form fields when closing the modal
    }
  };

  const openSignupModal = () => {
    closeLoginModal();
    if (signupModalRef.current) {
      signupModalRef.current.showModal();
    }
  };

  const closeSignupModal = () => {
    if (signupModalRef.current) {
      signupModalRef.current.close();
      reset(); // Reset the form fields when closing the modal
    }
  };

  return (
    <>
      {/* Button to open the login modal or logout */}
      {isLoggedIn ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={openLoginModal}>
          Login
        </button>
      )}

      {/* Login Modal */}
      <dialog ref={loginModalRef} className="modal">
        <div className="modal-box max-w-sm relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeLoginModal}
          >
            ✕
          </button>

          <form className="space-y-6" onSubmit={handleSubmit(onLoginSubmit)}>
            <h3 className="font-bold text-lg text-center">
              Login to Your Account
            </h3>

            <div className="form-control">
              <label htmlFor="login-email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label htmlFor="login-password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={openSignupModal}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>

      {/* Sign Up Modal */}
      <dialog ref={signupModalRef} className="modal">
        <div className="modal-box max-w-sm relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeSignupModal}
          >
            ✕
          </button>

          <form className="space-y-6" onSubmit={handleSubmit(onSignupSubmit)}>
            <h3 className="font-bold text-lg text-center">Create an Account</h3>

            <div className="form-control">
              <label htmlFor="signup-username" className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                id="signup-username"
                placeholder="Enter your username"
                className="input input-bordered w-full"
                required
                {...register("fullName", { required: true })}
              />
              {errors.fullName && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label htmlFor="signup-email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="signup-email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label htmlFor="signup-password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="signup-password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={closeSignupModal}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
