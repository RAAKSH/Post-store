import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import { useHistory, useLocation } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.props = props;
    console.log("dewrwr", this.props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      isLoggedIn: false,
      redirect: false,
      homeIn: false,
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail = (e) => {
    console.log("this.props", this.props);
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = (e) => {
    console.log("I am here in submit");
    const history = useNavigate();
    const path = window.location.href();
    console.log("path---", path);
    this.setState({ isLoggedIn: true });
    e.preventDefault();
    let user = localStorage.getItem("formdata");
    //let user = localStorage.getItem("formdata");
    console.log(user);
    this.setState({ redirect: true, isLoading: false });

    let oldArr = JSON.parse(user);
    oldArr.map((arr) => {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        if (
          arr.name === this.state.email &&
          arr.password === this.state.password
        ) {
          this.setState({ homeIn: true });
          history("/dashboard");
        }
      }
    });
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <>
              <form>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      className={"form-control "}
                      id="inputEmail"
                      placeholder="Email address"
                      type="text"
                      name="email"
                      onChange={this.onChangeEmail}
                      autoFocus
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                    <div className="invalid-feedback">
                      Please provide a valid Email.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="password"
                      className={"form-control "}
                      id="inputPassword"
                      placeholder="******"
                      name="password"
                      onChange={this.onChangePassword}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                    <div className="invalid-feedback">
                      Please provide a valid Password.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Login &nbsp;&nbsp;&nbsp;
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span></span>
                    )}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link className="d-block small mt-3" to={"register"}>
                  Register an Account
                </Link>
                <Link className="d-block small mt-3" to={"/dashboard"}>
                  Home Page
                </Link>
              </div>
            </>
          </div>
        </div>
      </div>
    );
  }
}
