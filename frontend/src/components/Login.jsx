import React, { useRef } from "react";

function Login() {
  const loginModalRef = useRef(null); // Ref to control login modal
  const signupModalRef = useRef(null); // Ref to control signup modal

  // Function to open the login modal
  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
    }
  };

  // Function to close the login modal
  const closeLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.close();
    }
  };

  // Function to open the signup modal and close login modal
  const openSignupModal = () => {
    closeLoginModal(); // Close the login modal first
    if (signupModalRef.current) {
      signupModalRef.current.showModal(); // Open signup modal
    }
  };

  // Function to close the signup modal
  const closeSignupModal = () => {
    if (signupModalRef.current) {
      signupModalRef.current.close();
    }
  };

  return (
    <>
      {/* Button to open the login modal */}
      <button className="btn btn-primary" onClick={openLoginModal}>
        Login
      </button>

      {/* Login Modal */}
      <dialog ref={loginModalRef} className="modal">
        <div className="modal-box max-w-sm relative">
          {/* Close button for the login modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeLoginModal}
          >
            ✕
          </button>

          {/* Login form */}
          <form className="space-y-6">
            <h3 className="font-bold text-lg text-center">
              Login to Your Account
            </h3>

            {/* Email Input */}
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
              />
            </div>

            {/* Password Input */}
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
              />
            </div>

            {/* Login Button */}
            <div className="form-control">
              <button type="button" className="btn btn-primary w-full">
                Login
              </button>
            </div>

            {/* Link to open Sign Up modal */}
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
          {/* Close button for the signup modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeSignupModal}
          >
            ✕
          </button>

          {/* Sign Up form */}
          <form className="space-y-6">
            <h3 className="font-bold text-lg text-center">Create an Account</h3>

            {/* Username Input */}
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
              />
            </div>

            {/* Email Input */}
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
              />
            </div>

            {/* Password Input */}
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
              />
            </div>

            {/* Sign Up Button */}
            <div className="form-control">
              <button type="button" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>

            {/* Link to return to Login modal */}
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={closeSignupModal} // Close Sign Up modal and open Login
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
