import React from "react";

const Login = () =>
     <div>
        <h1 id="login-color">Sign In</h1>
        {/* <!-- use div, block rendering strategy, for vertical slicing over br -->*/}
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
                {/*<!-- ok to put anchor around text inside button? what is best practice?-->*/}
                {/*<!-- Clicking on sign in button logs user into their profile page-->*/}
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
                        {/*// <!-- forgot password is not required for A1-->*/}
                        <a href="#" className="wbdv-link wbdv-forgot-password">Forgot Password?</a>
                    </div>
                    <div className="col-6">
                        {/*// <!-- Clicking on sign up button logs user into registration page-->*/}
                        <a href="../register/register.template.client.html"
                           className="float-right wbdv-link wbdv-register">Sign
                            up</a></div>
                </div>
            </div>
        </div>

export default Login
