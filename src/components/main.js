import React from 'react';
import {useFormik} from 'formik';

const initialValues = {
  email: '',
  password: ''
};
const onSubmit = (values) => {
  console.log('form data', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email format';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

function Main() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log('form errors', formik.touched);
  return (
    <div>
      <div className="page">
        <div className="block">
          <div className="header">
            <h2>Login to view our user pool</h2>
          </div>
          <div className="form">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.email ? (
                  <div className="form-validation">{formik.errors.email} </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                ></input>
                {formik.errors.password ? (
                  <div className="form-validation">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <br></br>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
