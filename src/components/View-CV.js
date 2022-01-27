import react, {Component} from 'react'
import '../App.css';
import {Link, Route,BrowserRouter} from 'react-router-dom'
import firebase from './Fire'




class MyDocs extends Component{
  constructor(){
    super();
    this.state = {
      userEmail:null,
      image:'',
      change:false
     
    }
  }


async componentDidMount(){
    var userId = firebase.auth().currentUser.uid;
    var userEmail = firebase.auth().currentUser.email
    this.setState({user:userId,userEmail:userEmail})



firebase.database().ref('myImage').on('child_added' , (data)=> { 
  this.setState({image:data.val()})
    //  this.state.image.push(data.val())

    console.log(data.val())
    }  )

  }







    render(){
      return(
        <div>
          {/* <span style={{fontSize:'12px'}}><b style={{color:'green',marginLeft:'30px'}}>{this.state.userEmail}</b> / {navigator.onLine===true ? <span style={{color:'green'}}>You are online</span> : <span style={{color:'red'}}>You are OffLine</span>}</span> */}
        <div className='container'>
        
        
        <img src={this.state.image} alt='pic here' width='200' height='170'/>
        
        </div>
</div>
      );
    }
  
}

export default MyDocs






