
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contactus.css';


function ContactUs(){
    const initialValues = {
        name: '',
        datepicker: new Date(),
        city: '',
        phone: '',
        email: '',
      };
    
      // Validation schema using Yup
      const validationSchema = Yup.object({
        name: Yup.string().required('Please enter your name'),
        datepicker: Yup.date().required('Please enter a correct date'),
        city: Yup.string().required('Please enter your city'),
        phone: Yup.string().required('Please enter your phone number'),
        email: Yup.string().email('Please enter a valid email address').required('Please enter your email'),
      });
    
      // Form submission handler
      const handleSubmit = (values) => {
        // Redirect or handle the form submission logic here
        window.location.href = "thank-you.html";
      };
    return(
        <div>
            <main>
      <h1>Contact Us</h1>
      <div className="container-1 container">
        <section className="contact-form container">
          <h2>Contact Us for for Info!</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form id="myForm">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error" />

                <label htmlFor="datepicker">Date</label>
                <Field name="datepicker">
                  {({ field, form }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={date => form.setFieldValue('datepicker', date)}
                      dateFormat="MM/dd/yyyy"
                      className="form-control"
                    />
                  )}
                </Field>
                <ErrorMessage name="datepicker" component="div" className="error" />

                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" />
                <ErrorMessage name="city" component="div" className="error" />

                <label htmlFor="phone">Contact Phone</label>
                <Field type="tel" id="phone" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />

                <label htmlFor="email">E-mail</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </section>

        <section className="contact-info">
          <h2>Home Styler</h2>
          <div className="container-2">
            <div className="icon-3">
              <i className="fa-solid fa-phone-volume"></i>
              <a href="tel:1111111111">+92-1111111111</a>
            </div>
            <div className="icon-4">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:Furnirointeriordesign@gmail.com">homestyler@gmail.com</a>
            </div>
            <div className="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.546589576096!2d67.05664877536069!3d24.879330844502203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eed5d2a946f%3A0x86b0b26ae2d6432b!2sConsulNet%20Corporation!5e0!3m2!1sen!2s!4v1703512548224!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
        </div>
    );
}
export default ContactUs;