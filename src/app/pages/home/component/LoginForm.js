import React, { Component } from "react";

class LoginForm extends Component {
  _onSubmitLogin = e => {
    e.preventDefault();
    //console.log(e.target.email.value, e.target.password.value, e.target.recordarme.checked, e.target.soyAdmin.checked)
    if (
      e.target.email.value == "jhonsmith@email.com" &&
      e.target.password.value == "123456"
    ) {
      console.log("logeado");
      this.props._cambiarPagina("escritorio");
    } else {
      console.log("Usuario incorrecto");
    }
  };

  render() {
    return (
      <div className="loginForm column is-three-fifths">
        <form onSubmit={e => this._onSubmitLogin(e)}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="checks">
            <div className="recuerdame">
              <input type="checkbox" name="recordarme" id="recordarme" />
              <label htmlFor="recordarme">Recuerdame</label>
            </div>
            <div className="admin">
              <input type="checkbox" name="soyAdmin" id="soyAdmin" />
              <label htmlFor="soyAdmin">Soy administrador</label>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
