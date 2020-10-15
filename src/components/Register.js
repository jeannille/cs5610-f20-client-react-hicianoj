import React from "react";

const Register = () =>
    <div class="form-group container-lg">
        <h1>Register</h1>
        <h6> <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            Please fill in the form  below to register for an account.</h6>

        <div class="form-group row">
            {/*username for label refers to id in input input element*/}
            <label for="username" class="col-sm-2 col-form-label">
                <b>Username:</b>
            </label>
            <div class="col-sm-10">
                <input id="username" placeholder="Wax Ladrian"
                       class="wbdv-field wbdv-username form-control"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="passwordFld" class="col-sm-2 col-form-label">
                <b>Password: </b>
            </label>
            <div class="col-sm-10">
                <input placeholder="lawman76#2!" id="passwordFld"
                       class="wbdv-field wbdv-password form-control"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="verifyPasswordFld" class="col-sm-2 col-form-label ">
                <b>Verify Password:</b>
            </label>
            <div class="col-sm-10">
                <input placeholder="lawman76#2!" id="verifyPasswordFld"
                       class="wbdv-field wbdv-password-verify form-control"/>
            </div>
        </div>

        <div class="form-group row">
            {/*/*creates the label space size 2 for button to align with input fields above-->*!/*/}
            <label for="registerBtn" class="col-sm-2 col-form-label "> </label>
            <div class="col-sm-10">
                <button type="submit" id="registerBtn"
                        class="btn btn-primary  btn-block wbdv-button wbdv-register">
                    Register
                </button>
                <p id = "bottomText">Already have an account?
                    <a href="../login/login.template.client.html">
                        Sign in
                    </a>
                </p>
            </div>
        </div>

        <div>

        </div>

    </div>

export default Register