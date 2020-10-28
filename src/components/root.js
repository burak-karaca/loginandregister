import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
const initialValues = {
  email: '',
  password: ''
};

// const validate = (values) => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'invalid email format';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  password: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .min(8, 'Error')
    .required('Required'),
  email: Yup.string().email('invalid email format').required('Required')
});

function Main() {
  const history = useHistory();
  const onSubmit = (values) => {
    history.push('/users');
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

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
                {formik.errors.email && formik.touched.email ? (
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
                {formik.errors.password && formik.touched.password ? (
                  <div className="form-validation">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <br></br>
                  <div className="button"><button type="submit">Login</button></div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
