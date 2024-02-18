import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";

const WeatherForm = ({ handleSubmissions }) => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    country: '',
    current: {
      temperature: '',
      description: '',
      humidity: '',
      wind_speed: ''
    },
    forecast: [
      {
        date: '',
        temperature_min: '',
        temperature_max: '',
        description: ''
      }
    ]
  });

  useEffect(() => {
    axios.get('http://localhost:8001/cities')
      .then(response => {
        setInitialValues(response.data); 
      })
      .catch(error => {
        console.error('Error fetching initial values:', error);
      });
  }, []);

  return (
    <div style={{ margin: "0 auto", width: '600px', height: '600px', marginTop: '5%', padding: '20px', border: "2px solid hwb(198 80% 0% / 0.651)", boxShadow: "0 5px 8px #12464dde", borderRadius: "10px" }}>
      <h2 style={{ marginBottom: "12%" }}>Document Weather With Us!</h2>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.country) {
            errors.country = 'Required';
          }
          if (!values.current.temperature) {
            errors.current = { ...errors.current, temperature: 'Required' };
          }
          if (!values.current.description) {
            errors.current = { ...errors.current, description: 'Required' };
          }
          if (!values.current.humidity) {
            errors.current = { ...errors.current, humidity: 'Required' };
          }
          if (!values.current.wind_speed) {
            errors.current = { ...errors.current, wind_speed: 'Required' };
          }

          values.forecast.forEach((forecast, index) => {
            if (!forecast.date || !forecast.temperature_min || !forecast.temperature_max || !forecast.description) {
              errors.forecast = { ...errors.forecast, [index]: 'All fields are required' };
            }
          });
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmissions(values, setSubmitting, resetForm);
          setSubmitting(false);
          axios.post('http://localhost:8001/cities', values)
            .then(response => {
              console.log('Data submitted successfully:', response.data);
            })
            .catch(error => {
              console.error('Error submitting data:', error);
            });
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className='weather-form-container text-center' >
            <div>
              <label htmlFor="name" style={{ color: 'black', fontWeight: "normal" }}>City Name:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="country" style={{ color: 'black', fontWeight: "normal" }}>Country:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="text" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>
            <div>
              <label htmlFor="current.temperature" style={{ color: 'black', fontWeight: "normal" }}>Current Temperature:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="number" name="current.temperature" />
              <ErrorMessage name="current.temperature" component="div" />
            </div>
            <div>
              <label htmlFor="current.description" style={{ color: 'black', fontWeight: "normal" }}>Current Description:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="text" name="current.description" />
              <ErrorMessage name="current.description" component="div" />
            </div>
            <div>
              <label htmlFor="current.humidity" style={{ color: 'black', fontWeight: "normal" }}>Humidity:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="number" name="current.humidity" />
              <ErrorMessage name="current.humidity" component="div" />
            </div>
            <div>
              <label htmlFor="current.wind_speed" style={{ color: 'black', fontWeight: "normal" }}>Wind Speed:</label>
              <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="number" name="current.wind_speed" />
              <ErrorMessage name="current.wind_speed" component="div" />
            </div>

            {values.forecast.map((forecast, index) => (
              <div key={index}>
                <h3 style={{ fontSize: "25px", marginTop: '6%', marginBottom: '6%', fontWeight: 'bold' }}>Forecast {index + 1}</h3>
                <div>
                  <label htmlFor={`forecast.${index}.date`} style={{ color: 'black', fontWeight: "normal" }}>Date:</label>
                  <Field className="weather-form input" style={{ marginLeft: "2%", width: '10rem', height: '1.2rem', border: "1px solid black" }} type="date" name={`forecast.${index}.date`} />
                  <ErrorMessage name={`forecast.${index}.date`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.temperature_min`} style={{ color: 'black', fontWeight: "normal" }}>Minimum Temperature:</label>
                  <Field className="weather-form input" style={{ marginLeft: "2%", width: '5rem', height: '1.3rem', border: "1px solid black" }} type="number" name={`forecast.${index}.temperature_min`} />
                  <ErrorMessage name={`forecast.${index}.temperature_min`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.temperature_max`} style={{ color: 'black', fontWeight: "normal" }}>Maximum Temperature:</label>
                  <Field className="weather-form input" style={{ marginLeft: "2%", width: '5rem', height: '1.3rem', border: "1px solid black" }} type="number" name={`forecast.${index}.temperature_max`} />
                  <ErrorMessage name={`forecast.${index}.temperature_max`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.description`} style={{ color: 'black', fontWeight: "normal" }}>Description:</label>
                  <Field className="weather-form input" style={{ marginLeft: "2%", width: '8rem', height: '1.3rem', border: "1px solid black" }} type="text" name={`forecast.${index}.description`} />
                  <ErrorMessage name={`forecast.${index}.description`} component="div" />
                </div>
              </div>
            ))}
            <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WeatherForm;
