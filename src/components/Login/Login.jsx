import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from './../FormValidation/LoginFormSchema';
import styles from "./Login.module.scss";
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

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

const Login = (props) => {
    function submit(formData, { setSubmitting, setStatus }) {
        props.login(formData.email, formData.password, formData.rememberMe, setStatus, setSubmitting)
        setSubmitting(true)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
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
                {({isSubmitting, isValid, status}) => (
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

                        <div className={styles.error_message}>{status}</div> 

                        <button type={'submit'} disabled={isSubmitting} className={styles.button}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {login}) (Login);