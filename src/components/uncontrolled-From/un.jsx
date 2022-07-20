import React , {Component} from 'react';


class UnControlled extends Component {

  handleSubmit = event => {
    event.preventDefault();

    const data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password= event.target.password.value;


    console.log(data);

    event.target.reset()
  }
  render(){
    return(
      <div className='container'>
           <h5> Working with Uncontrolled Form</h5>
            <form onSubmit={this.handleSubmit}>
              <input
                className='form-control my-2'
                type="text"
                name='name'
                placeholder='Enter Your Name'

              />
              <input 
                className='form-control my-2'
                type="email"
                name='email'
                placeholder='Enter Your Email'
              />

              <input 
                type="password" 
                className='form-control my-2'
                name='password'
                placeholder='Enter Your password'
              

               />


               <button type= 'submit'>Submit</button>
            </form>

      </div>
    )
  }
};


export default UnControlled;