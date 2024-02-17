// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';



// const WeatherForm = ({ handleSubmissions }) => {

//   return (
//     <div className="card container text-bg-info mb-3 bg-opacity-10 py-3" style={{width: '30rem', height: '24rem', marginTop: '8%', padding: '4%'}}>
//       <h2>Document Weather With Us!</h2>
//     <Formik
//       initialValues={{
//         city: '',
//         current_city: "",
//         country: '',
//         forecasts: [
//           { date: '',current_city:"", temperature_min: '', temperature_max: '', description: '' }
//         ]
//       }}
//       validate={values => {
//         const errors = {};
//         if (!values.city) {
//           errors.city = 'Required';
//         }
//         if (!values.country) {
//           errors.country = 'Required';
//         }
//         // Validation for each forecast entry
//         values.forecasts.forEach((forecast, index) => {
//           if (!forecast.date || !forecast.temperature_min || !forecast.temperature_max || !forecast.description) {
//             errors[`forecasts.${index}`] = 'All fields are required';
//           }
//         });
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting,resetForm }) => {
//         handleSubmissions(values, setSubmitting, resetForm);
//         setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting, values }) => (
//         <Form className='weather-form-container text-center'>
//           <div>
//             <label htmlFor="city" className='text-primary-emphasis'>City:</label>
//             <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name="city" />
//             <ErrorMessage name="city" component="div" />
//           </div>
//           <div>
//             <label htmlFor="country" className='text-primary-emphasis'>Country:</label>
//             <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name="country" />
//             <ErrorMessage name="country" component="div" />
//           </div>
//           {/* Input fields for each forecast entry */}
//           {values.forecasts.map((forecast, index) => (
//             <div key={index}>
//               <h3 className='badge text-info-emphasis pt-4'>Forecast {index + 1}</h3>
//               <div>
//                 <label htmlFor={`forecasts.${index}.date`} className='text-primary-emphasis'>Date:</label>
//                 <Field className="weather-form input" style={{width: '10rem', height: '1.2rem'}} type="date" name={`forecasts.${index}.date`} />
//                 <ErrorMessage name={`forecasts.${index}.date`} component="div" />
//               </div>
//               <div>
//                 <label htmlFor={`forecasts.${index}.temperature_min`} className='text-primary-emphasis'>Minimum Temperature:</label>
//                 <Field className="weather-form input" style={{width: '5rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.temperature_min`} />
//                 <ErrorMessage name={`forecasts.${index}.temperature_min`} component="div" />
//               </div>
//               <div>
//                 <label htmlFor={`forecasts.${index}.temperature_max`} className='text-primary-emphasis'>Maximum Temperature:</label>
//                 <Field className="weather-form input" style={{width: '5rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.temperature_max`} />
//                 <ErrorMessage name={`forecasts.${index}.temperature_max`} component="div" />
//               </div>
//               <div>
//                 <label htmlFor={`forecasts.${index}.description`} className='text-primary-emphasis'>Description:</label>
//                 <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.description`} />
//                 <ErrorMessage name={`forecasts.${index}.description`} component="div" />
//               </div>
//             </div>
//           ))}
//           <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="button" onClick={() => {
//             // Add a new forecast entry
//             values.forecasts.push({ date: '', temperature_min: '', temperature_max: '', description: '' });
//           }}>Add Forecast</button>
//           <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="submit" disabled={isSubmitting} onSubmit={handleSubmissions} >
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//     </div>
//   );
// };

// export default WeatherForm;


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const WeatherForm = ({ handleSubmissions }) => {
  return (
    <div className="card container text-bg-info mb-3 bg-opacity-10 py-3" style={{width: '30rem', height: '24rem', marginTop: '8%', padding: '4%'}}>
      <h2>Document Weather With Us!</h2>
      <Formik
        initialValues={{
          city: '',
          current_city: '', // Add current_city field
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmissions(values, setSubmitting, resetForm);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className='weather-form-container text-center'>
            <div>
              <label htmlFor="city" className='text-primary-emphasis'>City:</label>
              <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name="city" />
              <ErrorMessage name="city" component="div" />
            </div>
            <div>
              <label htmlFor="current_city" className='text-primary-emphasis'>Current City:</label>
              <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name="current_city" />
              <ErrorMessage name="current_city" component="div" />
            </div>
            <div>
              <label htmlFor="country" className='text-primary-emphasis'>Country:</label>
              <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>
            {/* Input fields for each forecast entry */}
            {values.forecasts.map((forecast, index) => (
              <div key={index}>
                <h3 className='badge text-info-emphasis pt-4'>Forecast {index + 1}</h3>
                <div>
                  <label htmlFor={`forecasts.${index}.date`} className='text-primary-emphasis'>Date:</label>
                  <Field className="weather-form input" style={{width: '10rem', height: '1.2rem'}} type="date" name={`forecasts.${index}.date`} />
                  <ErrorMessage name={`forecasts.${index}.date`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.temperature_min`} className='text-primary-emphasis'>Minimum Temperature:</label>
                  <Field className="weather-form input" style={{width: '5rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.temperature_min`} />
                  <ErrorMessage name={`forecasts.${index}.temperature_min`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.temperature_max`} className='text-primary-emphasis'>Maximum Temperature:</label>
                  <Field className="weather-form input" style={{width: '5rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.temperature_max`} />
                  <ErrorMessage name={`forecasts.${index}.temperature_max`} component="div" />
                </div>
                <div>
                  <label htmlFor={`forecasts.${index}.description`} className='text-primary-emphasis'>Description:</label>
                  <Field className="weather-form input" style={{width: '8rem', height: '1.3rem'}} type="text" name={`forecasts.${index}.description`} />
                  <ErrorMessage name={`forecasts.${index}.description`} component="div" />
                </div>
              </div>
            ))}
            <button className='weather-form button btn btn-primary btn-sm mx-3 my-3' type="button" onClick={() => {
              // Add a new forecast entry
              values.forecasts.push({ date: '', temperature_min: '', temperature_max: '', description: '' });
            }}>Add Forecast</button>
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
