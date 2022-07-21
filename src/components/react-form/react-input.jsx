import React from 'react';
import PropTypes from 'prop-types'; 



const Input = props => (
  <div className= 'form-group'>
    <label htmlFor={props.name}>{props.label} </label>
     <input 
        className='form-control my-2'
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
  </div>
 );

 Input.propTypes = { 
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
 };


 Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  label: ''
 }

 export default Input;