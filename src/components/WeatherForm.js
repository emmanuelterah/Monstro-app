import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const WeatherForm = ({ handleSubmissions }) => {
  return (
    <div style={{margin: "0 auto",width: '600px', height: '600px', marginTop: '5%', padding: '20px', border: "2px solid hwb(198 80% 0% / 0.651)", boxShadow: "0 5px 8px #12464dde", borderRadius: "10px"}}>
      <h2 style={{marginBottom: "12%"}}>Document Weather With Us!</h2>
      <Formik
        initialValues ={{
          city: '',
          current: '', 
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

          values.forecasts.forEach((forecast, index) => {
            if (!forecast.date || !forecast.temperature_min || !forecast.temperature_max || !forecast.description) {
              errors[`forecasts.${index}`] = 'All fields are required';
            }
          });
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmissions(values, setSubmitting, resetForm);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
           <Form className='weather-form-container text-center' >
            <div>
              <label htmlFor="city" style={{color:'black',fontWeight: "normal"}}>City:</label>
              <Field className="weather-form input" style={{marginLeft:"2%", width: '8rem', height: '1.3rem', border: "1px solid black"}} type="text" name="city" />
              <ErrorMessage name="city" component="div" />
            </div>
            <div>
              <label htmlFor="current" style={{color:'black',fontWeight: "normal"}}>Current City:</label>
              <Field className="weather-form input" style={{marginLeft:"2%", width: '8rem', height: '1.3rem', border: "1px solid black"}} type="text" name="current_city" />
              <ErrorMessage name="current_city" component="div" />
            </div>
            <div>
              <label htmlFor="country" style={{color:'black' ,fontWeight: "normal"}}>Country:</label>
              <Field className="weather-form input" style={{marginLeft:"2%", width: '8rem', height: '1.3rem', border: "1px solid black"}} type="text" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>

            {values.forecasts.map((forecast, index) => (
              <div key={index}>
                <h3 style={{fontSize:"25px", marginTop:'6%', marginBottom:'6%', fontWeight:'bold'}} >Forecast {index + 1}</h3>
                <div>
                  <label htmlFor={`forecasts.${index}.date`} style={{color:'black', fontWeight: "normal"}}>Date:</label>
                  <Field className="weather-form input" style={{marginLeft:"2%", width: '10rem', height: '1.2rem', border: "1px solid black"}} type="date" name={`forecasts.${index}.date`} />
                  <ErrorMessage name={`forecasts.${index}.date`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.temperature_min`}  style={{color:'black', fontWeight: "normal"}}>Minimum Temperature:</label>
                  <Field className="weather-form input" style={{marginLeft:"2%", width: '5rem', height: '1.3rem', border: "1px solid black"}} type="text" name={`forecasts.${index}.temperature_min`} />
                  <ErrorMessage name={`forecasts.${index}.temperature_min`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.temperature_max`}  style={{color:'black', fontWeight: "normal"}} >Maximum Temperature:</label>
                  <Field className="weather-form input" style={{marginLeft:"2%", width: '5rem', height: '1.3rem', border: "1px solid black"}} type="text" name={`forecasts.${index}.temperature_max`} />
                  <ErrorMessage name={`forecasts.${index}.temperature_max`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.description`}  style={{color:'black', fontWeight: "normal"}}>Description:</label>
                  <Field className="weather-form input" style={{marginLeft:"2%", width: '8rem', height: '1.3rem', border: "1px solid black"}} type="text" name={`forecasts.${index}.description`} />
                  <ErrorMessage name={`forecasts.${index}.description`} component="div" />
                </div>
              </div>
            ))}
            {/* <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="button" onClick={() => {
              
              values.forecasts.push({ date: '', temperature_min: '', temperature_max: '', description: '' });
            }}>Add Forecast</button> */}
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
