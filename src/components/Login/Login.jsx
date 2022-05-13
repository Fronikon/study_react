import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from './../FormValidation/LoginFormSchema';
import styles from "./Login.module.scss";

// const validateLoginForm = values => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = 'Required 1';
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }
//     return errors;
// };

const Login = () => {
    function submit(values) {
        console.log(values)
    }

    return (
        <div>
            <h2>Login</h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validationSchema={loginFormSchema}
                onSubmit={submit}
            >
                {({dirty, isValid}) => (
                    <Form>
                        <div>
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'e-mail'}
                                className={isValid ? '' : styles.input_error}/>
                        </div>
                        <ErrorMessage name="email" component="span" className={styles.error_message}/>

                        <div>
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'password'}
                                className={isValid ? '' : styles.input_error}
                                />
                        </div>
                        <ErrorMessage name="password" component="span" className={styles.error_message}/>

                        <div>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe' />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <button type={'submit'} disabled={!dirty}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;