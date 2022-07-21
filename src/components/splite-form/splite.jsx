import React , {Component} from 'react';
import Form from './form'; 






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