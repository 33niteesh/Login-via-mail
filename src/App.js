import {Component} from 'react';
import './App.css'
import axios from 'axios'
import Math from 'math'
export default class App extends Component{
  constructor(){
    super();
    this.state={
      mailid:"",
      otpsent:0,
      otp:'',
      pass:''
    }
  }
    
  render(){
    const sendotp=()=>{
      var rand=Math.floor(Math.random()*(9999-1000+1)+1000);
      this.state.otpsent=rand;
      console.log(this.state.otpsent+" "+rand)
      axios.post("http://localhost:3000/send",this.state)
      document.getElementById('hide').style.visibility='visible';
    }
    const reciveotp=()=>{  
      if(this.state.otp==this.state.otpsent){alert('Authentication Sucess')}
      else{
        alert("something went wrong please retry")
        window.reload()
      }
    }
  return (
    <>
    <center>
    <br></br><br></br><br></br>
      <input type='email' onChange={(e)=>{this.setState({mailid:e.target.value})}} placeholder="user@gmail.com" id="mail"></input>
      <br></br><br></br><input type='password' onChange={(e)=>{this.setState({pass:e.target.value})}} placeholder="*******" id="pass"></input><br></br><br></br>
      <button onClick={sendotp}>send otp</button>
      <br></br><br></br><br></br>
      <hr></hr><br></br><br></br><br></br>
      <input onChange={(e)=>this.setState({otp:e.target.value})} id='hide' placeholder='4 digit otp'></input><br></br><br></br>
      <br></br>
      <button onClick={reciveotp}>Regester</button>
    </center>
    </>
  );}
}


