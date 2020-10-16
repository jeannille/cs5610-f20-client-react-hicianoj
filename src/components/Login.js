import React from "react";

const Login = () =>

    <div>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
        <h1>Login</h1>

        <div className="form-group row">
            <label htmlFor="logUsername"
                   className="col-sm-2 col-form-label wbdv-field wbdv-username">
                Username </label>
            <div className="col-sm-10">
                <input className="form-control wbdv-field wbdv-username" id="logUsername" placeholder=" Wax"/>
            </div>
        </div>


        <div className="form-group row">
            <label htmlFor="logPassword"
                   className="col-sm-2 col-form-label wbdv-field wbdv-password">
                Password
            </label>
            <div className=" col-sm-10">
                <input type="password" className="form-control wbdv-field wbdv-password"
                       id="logPassword" placeholder="123qwe#$%"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">

                <a href="../profile/profile.template.client.html">
                    <button className="btn btn-primary btn-block wbdv-login">
                        Sign in
                    </button>
                </a>

                <a href="../index.html">
                    <button id="cancelBtn" className="btn btn-primary btn-block wbdv-login">
                        Cancel
                    </button>
                </a>

                <div className="row">
                    <div className="col-6">
                        <a href="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</a>
                    </div>
                    <div className="col-6">
                    {/*// <!-- Clicking on sign up button logs user into registration page-->*/}
                    <a href="../register/register.template.client.html"
                       className="float-right wbdv-link wbdv-register">Sign up</a>
                </div>

                </div>

            </div>

        </div>

    </div>




export default Login
