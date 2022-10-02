import React from "react";

function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <label>
          <div>
            First Name
            <input
              type="text"
              name="firstname"
              placeholder="Enter Firs tname"
            />
          </div>
          <div>
            Second Name
            <input
              type="text"
              name="secondname"
              placeholder="Enter Second name"
            />
          </div>
          <div>
            Email
            <input type="text" name="email" placeholder="Enter E-mail" />
          </div>
        </label>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
        </div>
        <button type="button" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
