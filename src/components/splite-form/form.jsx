import React from 'react';
import PropTypes from 'prop-types'; 

import TextInput from './input';

const Form = props => (
  <form onSubmit={props.onSubmit}>
  <TextInput 
      label='Enter Your Name'
      type='text'
      name='name'
      value={props.values.name}
      onChange={props.onChange}
  />
   <TextInput 
      label='Enter Your Email'
      type='email'
      name='email'
      value={props.values.email}
      onChange={props.onChange}
  />
   <TextInput 
      label='Enter Your Password'
      type='password'
      name='password'
      value={props.values.password}
      onChange={props.onChange}
  />

   <button type='submit '>Submit</button>
</form>
)


Form.propTypes ={
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}



export default Form;