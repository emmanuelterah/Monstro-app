import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Form.css';



const WeatherForm = ({ handleSubmit }) => {


  return (
    <Formik
      initialValues={{
        city: '',
        country: '',
        forecasts: [
          { date: '', temperature_min: '', temperature_max: '', description: '' }
        ]
      }}
      validate={values => {
        const errors = {};
        if (!values.city) {
          errors.city = 'Required';
        }
        if (!values.country) {
          errors.country = 'Required';
        }
        // Validation for each forecast entry
        values.forecasts.forEach((forecast, index) => {
          if (!forecast.date || !forecast.temperature_min || !forecast.temperature_max || !forecast.description) {
            errors[`forecasts.${index}`] = 'All fields are required';
          }
        });
        return errors;
      }}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className='weather-form-container'>
          <div>
            <label htmlFor="city">City:</label>
            <Field className="weather-form input"type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <Field className="weather-form input" type="text" name="country" />
            <ErrorMessage name="country" component="div" />
          </div>
          {/* Input fields for each forecast entry */}
          {values.forecasts.map((forecast, index) => (
            <div key={index}>
              <h3>Forecast {index + 1}</h3>
              <div>
                <label htmlFor={`forecasts.${index}.date`}>Date:</label>
                <Field className="weather-form input" type="date" name={`forecasts.${index}.date`} />
                <ErrorMessage name={`forecasts.${index}.date`} component="div" />
              </div>
              <div>
                <label htmlFor={`forecasts.${index}.temperature_min`}>Minimum Temperature:</label>
                <Field className="weather-form input" type="text" name={`forecasts.${index}.temperature_min`} />
                <ErrorMessage name={`forecasts.${index}.temperature_min`} component="div" />
              </div>
              <div>
                <label htmlFor={`forecasts.${index}.temperature_max`}>Maximum Temperature:</label>
                <Field className="weather-form input" type="text" name={`forecasts.${index}.temperature_max`} />
                <ErrorMessage name={`forecasts.${index}.temperature_max`} component="div" />
              </div>
              <div>
                <label htmlFor={`forecasts.${index}.description`}>Description:</label>
                <Field className="weather-form input" type="text" name={`forecasts.${index}.description`} />
                <ErrorMessage name={`forecasts.${index}.description`} component="div" />
              </div>
            </div>
          ))}
          <button className='weather-form button' type="button" onClick={() => {
            // Add a new forecast entry
            values.forecasts.push({ date: '', temperature_min: '', temperature_max: '', description: '' });
          }}>Add Forecast</button>
          <button className='weather-form button' type="submit" disabled={isSubmitting} onSubmit={handleSubmit} >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default WeatherForm;