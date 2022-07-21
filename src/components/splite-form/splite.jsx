import React , {Component} from 'react';
import PropTypes from 'prop-types'; 

const TextInput = props => (
     <div className='form-group'>
         <label htmlFor={props.name}>{props.label} :</label>
         <input
           className='form-control my-2'
           type={props.type}
           name={props.name}
           id={props.name}
           placeholder={props.placeholder}
           value={props.value}
           onChange={props.onChange}
          />

     </div>
);


TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


TextInput.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  
}


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

class Split extends Component {

  state = {
      name: '',
      email: '',
      password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state);
    event.target.reset();
    this.setState({name: '', email: '', password: ''})

  }
  render(){

    
    return(
      <div className='container'>
            <h4>Controlled Form By React</h4>
               <Form 
                  values={this.state}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
               />
            <div>
              
            </div>
      </div>
    )
  }
}


export default Split;