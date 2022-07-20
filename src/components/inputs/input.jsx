import React, {Component} from 'react';

class Inputs extends Component {
 
      state = {
        name: '',
        country: '',
        bio: '',
        birthDate: '',
        gender: '',
        agree: false
      }

      handleChange = event => {
        this.setState({
          [event.target.name] : event.target.value
        })
      }


      handleCheckbox = event => {
        this.setState({agree: event.target.checked})
      }


      handleSubmit = ()=> {
        console.log(this.state)
      }
  render(){

    const {name, country, bio, birthDate, agree} = this.state
    return(
      <div className='container'>
           
         <h3 className='pb-5'>Input Form</h3>
         <div>
         <input onChange={this.handleChange} className='form-control my-2' type="text" name='name' placeholder='Please Enter Your Name' value={name}/>

           <select value={country} onChange={this.handleChange} name="country" className='form-control my-2' >
              <option value="Select Country">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="China">China</option>
           </select>

            <textarea value={bio} onChange={this.handleChange} name="bio" placeholder='Tell me about yourself' className='form-control my-2'></textarea>
         
         <input value={birthDate} type="date" onChange={this.handleChange} className='form-control my-2' name='birthDate' />
         

         </div>

         <div>
              <input type="radio" name='gender' value='Male' onChange={this.handleChange} />  Male
              <input className='ms-2' type="radio" name='gender' value='Female' onChange={this.handleChange} />  Female
              <input type="radio" className='ms-2' name='gender' value='Others' onChange={this.handleChange} />  Others
         </div>

         <div>
          <input type="checkbox" name='agree' checked={agree} onChange={this.handleCheckbox}/> I agree this terms and policy
         </div>
         
         <button onClick={this.handleSubmit}>Show Data</button>
      </div>
    )
  }
};


export default Inputs;