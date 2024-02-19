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
    axios.get('https://cities-9pmb.onrender.com/cities')
      .then(response => {
        setInitialValues(response.data); 
      })
      .catch(error => {
        console.error('Error fetching initial values:', error);
      });
  }, []);

  return (
    <div style={{ margin: "0 auto", width: '1440px', height: '720px', marginTop: '3%',marginBottom: '3%', padding: '20px', border: "2px solid hwb(198 80% 0% / 0.651)", boxShadow: "0 5px 8px #12464dde", borderRadius: "10px" }}>
      <h2 style={{ width: "100%", height: "50px", marginBottom: '20px' }}>Document Weather With Us!</h2>
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
          axios.post('https://cities-9pmb.onrender.com/cities', values)
            .then(response => {
              console.log('Data submitted successfully:', response.data);
            })
            .catch(error => {
              console.error('Error submitting data:', error);
            });
        }}
      >
        {({ isSubmitting, values }) => (
          
          <Form className='weather-form-container text-center' style={{width: '100%', display: 'flex', }}>
            <div style={{height:  '35vh', flexGrow: 2, width: '50vw'}}>
              <h2 style={{height: '40px', marginBottom: '12px', paddingTop: '15px', paddingBottom: '40px', marginRight: '3px'}}>Weather Form</h2>
            <div>
              <label htmlFor="name" style={{ color: 'black', fontWeight: "normal" }}>City Name:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px',marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="country" style={{ color: 'black', fontWeight: "normal" }}>Country:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="text" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>
            <div>
              <label htmlFor="current.temperature" style={{ color: 'black', fontWeight: "normal" }}>Current Temperature:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="number" name="current.temperature" />
              <ErrorMessage name="current.temperature" component="div" />
            </div>
            <div>
              <label htmlFor="current.description" style={{ color: 'black', fontWeight: "normal" }}>Current Description:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="text" name="current.description" />
              <ErrorMessage name="current.description" component="div" />
            </div>
            <div>
              <label htmlFor="current.humidity" style={{ color: 'black', fontWeight: "normal" }}>Humidity:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="number" name="current.humidity" />
              <ErrorMessage name="current.humidity" component="div" />
            </div>
            <div>
              <label htmlFor="current.wind_speed" style={{ color: 'black', fontWeight: "normal" }}>Wind Speed:</label>
              <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="number" name="current.wind_speed" />
              <ErrorMessage name="current.wind_speed" component="div" />
            </div>
          </div>

          <div style={{height:  '35vh', flexGrow: 2, width: '50vw'}}>
            {values.forecast.map((forecast, index) => (
              <div key={index}>
                <h2 style={{marginLeft: '3px', height: '32px', marginBottom: '12px', paddingTop: '15px', paddingBottom: '40px'}}>Forecast</h2>
                <div style = {{marginTop: '12px'}}>
                  <label htmlFor={`forecast.${index}.date`} style={{ color: 'black', fontWeight: "normal" }}>Date:</label>
                  <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="date" name={`forecast.${index}.date`} />
                  <ErrorMessage name={`forecast.${index}.date`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.temperature_min`} style={{ color: 'black', fontWeight: "normal" }}>Minimum Temperature:</label>
                  <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="number" name={`forecast.${index}.temperature_min`} />
                  <ErrorMessage name={`forecast.${index}.temperature_min`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.temperature_max`} style={{ color: 'black', fontWeight: "normal" }}>Maximum Temperature:</label>
                  <Field className="weather-form input" style={{paddingLeft: '10px', margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="number" name={`forecast.${index}.temperature_max`} />
                  <ErrorMessage name={`forecast.${index}.temperature_max`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecast.${index}.description`} style={{ color: 'black', fontWeight: "normal" }}>Description:</label>
                  <Field className="weather-form input" style={{paddingLeft: '10px',margin: '8px', marginLeft: "2%", width: '50%', height: '1.8rem', border: "1px solid black" }} type="text" name={`forecast.${index}.description`} />
                  <ErrorMessage name={`forecast.${index}.description`} component="div" />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '6px'}} >
                  <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="submit" disabled={isSubmitting} style={{margin: "0 auto", padding: "12px 50px"}}>
                  Submit
                  </button>
              </div>
              </div>  
             
    
            ))}
           
            </div>
          </Form>

        )}

      </Formik>
    </div>
  );
};

export default WeatherForm;
