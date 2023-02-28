import { useState, useEffect } from "react";
import React from "react";
import HeaderSection from "./Header";
import "./LoginPage.css";
import bcrypt from "bcryptjs";
import axios from "axios";
function RegistrationForm() {
  const initialValues = {
    FullName: "",
    email: "",
    password: "",
    birthyear: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // const savePass = (e) => {
  //   const hashedPassword = bcrypt.hashSync(formValues.password, 10);
  //   localStorage.setItem("pass", hashedPassword);
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };
  // useEffect(() => {
  //   const hashedPassword1 = bcrypt.hashSync("1", 10);
  //   localStorage.setItem("passTest", hashedPassword1);
  //   const pass = localStorage.getItem("passTest");
  //   console.log("SK@", pass);
  //   bcrypt.compare("123", pass).then((res) => console.log("SK@pass", res));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Name is required!";
    }

    if (!values.lastName) {
      errors.lastName = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }
    if (!values.mob) {
      errors.mob = "Mobile Number is required !";
    }
    if (!values.birthyear) {
      errors.birthyear = "Birth year is requred!";
    }
    return errors;
  };

  const captureData = () => {
    console.log("SK@", formValues);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formValues)
      .then((res) => console.log("SK@response", res))
      .catch((err) => console.log("SK@", err));
  };
  const generateFullName = () => {
    setShowFullName(() => !showFullName);
  };
  return (
    <>
      <HeaderSection />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label onClick={generateFullName}>FullName</label>
            {showFullName && (
              <>
                <div style={{}}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.firstName}</p>
                <div style={{}}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.lastName}</p>
              </>
            )}

            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div>
              <label>Create Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div>
              <label>Mobile Number</label>
              <input
                type="number"
                name="mob"
                placeholder="Enter Mobile Number"
                value={formValues.mob}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.mob}</p>
            <div>
              <label>Birth Year</label>
              <input
                type="year"
                name="birthyear"
                placeholder="Birth Year"
                value={formValues.birthyear}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.birthyear}</p>
            <h4>
              By clicking <a href="">continue</a>, you agree to the Terms and
              acknowledge the <a href="">Privacy Policy</a>
            </h4>
            <button onClick={captureData}>Continue</button>
            <h3>or create an account with</h3>
            <button>Google</button>
            <button>Email</button>
          </div>
          <h4>
            Already have an account?<a href="">sign in </a>
          </h4>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
