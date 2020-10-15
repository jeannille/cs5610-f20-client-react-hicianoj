import React from "react";

const Profile = () =>
    <div class="form-group container-lg">
        <h1>Profile</h1>
        <p id="profileAlert" class="wbdv-message"></p>
        {/*form-group row will allow to adapt to screen sizes (ie. mobile) */}
        {/*label will take up 2, input field 10 (bootstrap divides pg in 12 equal parts)*/}
        <div class="form-group row">
            {/*sm refers to screen size, for sm and above 2 and 10 applies*/}
            <label for="usernameField" class="col-sm-2 col-form-label">
                Username:</label>
            <div class="col-sm-10">
                <input title="test" id="usernameField" class="form-control wbdv-field wbdv-username"
                       value="Profile successfully saved"/>
            </div>
        </div>


        <div class="form-group row">
            <label for="passwordField" class="col-sm-2 col-form-label">
                Password: </label>
            <div class="col-sm-10">
                <input id="passwordField" placeholder="coinshot11897&"
                       class="form-control wbdv-field wbdv-password"
                       title="Enter phone number with area code"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="phoneField" class="col-sm-2 col-form-label">
                Phone: </label>
            <div class="col-sm-10">
                <input id="phoneField" placeholder="(###)###-####"
                       class="form-control wbdv-field wbdv-phone"
                       title="Enter phone number with area code"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="emailField" class="col-sm-2 col-form-label">
                Email: </label>
            <div class="col-sm-10">
                <input id="emailField" type="email" class="form-control wbdv-field wbdv-email"
                       placeholder="lawman@scradel.com"/>
            </div>
        </div>

        <div class="form-group row">
            <label for="dobField" class="col-sm-2 col-form-label">
                Date of Birth: </label>
            <div class="col-sm-10">
                <input value="1989-05-19" id="dobField" type="date"
                       class="form-control wbdv-field wbdv-dob"/>
            </div>
        </div>

        {/*For now, users have access to role management. Will change to admin-only-->*/}
        <div class="form-group row">
            <label for="roleField" class="col-sm-2 col-form-label wbdv-field wbdv-role">
                Role: </label>
            <div class="col-sm-10">
                <select class="form-control wbdv-field wbdv-role" id="roleField">
                    <option value="Faculty">Faculty</option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
        </div>


        <div class="form-group row">
            <label for="updateBtn" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
                <button id="updateBtn" onclick="myFunction()"
                        class="btn btn-warning btn-block wbdv-button wbdv-update">
                    Update
                </button>
            </div>
        </div>

        {/*/!*found the onclick attribute online, thought it would be cool to have the button change*!/*/}
        {/*/!*color when user clicked on update to signal a change had been made*!/*/}
        {/*<script>*/}
        {/*    function myFunction() {*/}
        {/*    document.getElementById("updateBtn").style.backgroundColor = "#007bff";*/}
        {/*    document.getElementById("profileAlert").innerHTML = "Profile successfully saved";*/}
        {/*}*/}
        {/*</script>*/}


        <div class="form-group row">
            {/*logout goes to login page for now*/}
            <label for="logoutBtn" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
                {/*make whole button a link to home page for now */}
                <a href="../index.html">
                    <button id="logoutBtn" class="btn btn-primary btn-block wbdv-button wbdv-logout">
                        Logout
                    </button>
                </a>
            </div>
        </div>
    </div>

export default Profile
