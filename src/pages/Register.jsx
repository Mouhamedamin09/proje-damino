import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [type, setType] = useState("Student");

  function handleClick(event) {
    event.preventDefault();
    // Save the form data or perform any other actions here
    console.log("Form Data:", { email, name, password,type });
    // Reset the form
    setEmail("");
    setName("");
    setPassword("");
    setGender("Male");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }
   function handleTypeChange(event) {
    setType(event.target.value);
  }

  return (
    <>
      <div className="contreg" data-aos="zoom-in" data-aos-duration="1500">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
          rel="stylesheet"
        />

        <div className="testbox">
          <h1>Registration</h1>

          <form action="/">
            <hr />
            <div className="accounttype">
            
            </div>
            <hr />
            <label htmlFor="name" id="icon">
              <i className="icon-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="name" id="icon">
              <i className="icon-user"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <label htmlFor="name" id="icon">
              <i className="icon-shield"></i>
            </label>
            <input
              type="password"
              name="name"
              id="name"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
           
            <p>
              By clicking Register, you agree to our{" "}
              <a href="#">terms and conditions</a>.
            </p>
            <button onClick={handleClick} className="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
