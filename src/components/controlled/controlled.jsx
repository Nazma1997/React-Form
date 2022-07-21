import React , {Component} from 'react';


class Controlled extends Component {

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

      const {name, email, password} = this.state
    return(
      <div className='container'>
            <h4>Controlled Form By React</h4>

            <div>
               <form onSubmit={this.handleSubmit}>
                    <input 
                       className='form-control mb-2'
                       type="text"
                       name='name'
                       value={name}
                       placeholder='Enter Your Name'
                       onChange={this.handleChange}
                       
                     />
                    <input 
                      className='form-control mb-2'
                      type="text" 
                      name='email'
                      value={email}
                      placeholder= 'Enter Your Email'
                      onChange={this.handleChange}
                     />
                      
                     <input 
                      className='form-control mb-2'
                      type="password" 
                      name="password" 
                      value={password} 
                      placeholder='Enter Your Password'
                      onChange={this.handleChange}
                    />

                    <button type='submit '>Submit</button>
               </form>
            </div>
      </div>
    )
  }
}


export default Controlled;