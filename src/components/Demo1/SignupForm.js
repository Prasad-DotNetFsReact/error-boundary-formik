import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => (
    <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
        }}
       
    >
        <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
        </Form>
    </Formik>
);

export default SignupForm;
