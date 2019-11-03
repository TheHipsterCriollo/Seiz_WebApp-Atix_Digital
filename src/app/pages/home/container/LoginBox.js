import React from "react";

import LoginForm from "../component/LoginForm";
import seiz_logo from "../source/images/seiz_logo.svg";

const Login = () => {
  return (
    <div className="login_box column is-one-third card">
      <img
        className="logo_login column is-three-quarters"
        src={seiz_logo}
        alt="Seiz Logo"
      />
      <LoginForm />
    </div>
  );
};

export default Login;
