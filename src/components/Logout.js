import react, {Component} from 'react'
import '../App.css';
import firebase from './Fire'
// import {Link} from 'react-router-dom'


  class Logout extends Component{
    constructor(){
      super();
      this.state ={
              user:null,
              userEmail:null
      }

  }



  componentDidMount(){
    var userId = firebase.auth().currentUser.uid;
    var userEmail = firebase.auth().currentUser.email
    
    this.setState({user:userId,userEmail:userEmail})
  }




    Logout= ()=>{
        firebase.auth().signOut();
    }

    render(){
        return(
          <div>
         <br/>
         <div className='container' style={{textAlign:'right'}}> <button className="waves-effect waves-dark btn red" onClick={this.Logout}>Logout</button> </div> 
         
         
         <div className="row container" style={{margin:'auto'}}>
    {/* <div className="col s12 m6"> */}
      <div className="card pink lighten-4">
        <div className="card-content">
          {/* <span className="card-title"> <b>Introduction</b></span> */}
          
          <span style={{color:'blue', fontSize:'20px'}}><b>Welcome... </b> <span><b style={{color:'blue',marginLeft:'30px'}}>{this.state.userEmail}</b></span></span>

        </div>
      </div>
    {/* </div> */}
  </div>




            </div>
        )
    }


  }

export default Logout;