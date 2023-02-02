import React from "react";

const Register = () => {
  return (
    <div className="login">
      <form>
        <div>
          <label htmlFor="email">Full name</label>
          <input type="text" placeholder="Enter name here..." />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email here..." />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password here..." />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
