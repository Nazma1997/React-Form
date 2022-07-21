import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import Input from './react-input'

 


class FullForm extends Component {
    
     state = {
           name: '',
           email: '',
           password: '',
           country: '',
           age: '',
           gender: '',
           agreement: false
     }

     handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
     }


     handleSubmit = event => {
      event.preventDefault()

      console.log(this.state)
      event.target.reset()
      this.setState({name: '', email: '', password: '', country: '', age: '', gender: '', agreement: false})
     }

     handleCheckbox = event => {
      this.setState({agreement: event.target.checked})
    }

  render(){
      const {name, email, password, country, age  } = this.state
    return(
      <div className='container mt-5'>
             <h4>Working With React Form</h4>


             <form onSubmit={this.handleSubmit}>
                 <Input
                  
                   type='text'
                   label='Enter Your Name'
                   name='name'
                   value={name}
                   onChange={this.handleChange} 
                
                 />
                 <Input 
                  
                   type='email'
                   label='Enter Your Email'
                   name='email'
                   value={email}
                   onChange={this.handleChange}
                   
                 />
                 <Input
                   
                   type='password'
                   label='Enter Your Password'
                   name='password'
                   value={password}
                   onChange={this.handleChange}
                   
                 />
                 <Input 
                   
                   type='text'
                   label='Enter Your Country'
                   name='country'
                   value={country}
                   onChange={this.handleChange}
                   
                 />
                 <Input 
                   
                   type='text'
                   label='Enter Your Age'
                   name='age'
                   value={age}
                   onChange={this.handleChange}
                   
                 />

           <div>
              <input type="radio" name='gender' value='Male' onChange={this.handleChange} />  Male
              <input className='ms-2' type="radio" name='gender' value='Female' onChange={this.handleChange} />  Female
              <input type="radio" className='ms-2' name='gender' value='Others' onChange={this.handleChange} />  Others
          </div>

           <div>
            <input 
               type="checkbox" 
               onChange={this.handleCheckbox}
               required
            /> I agree this terms and policy
           </div>


             
                   <button type='submit' > Submit</button>
                
             </form>
      </div>
    )
  }
}


export default FullForm;