import react, {Component} from 'react'
import '../App.css';
import firebase from './Fire'
// import {Link} from 'react-router-dom'


  class Logout extends Component{
    constructor(){
      super();
      this.state ={
        userEmail:null,
        user:null,
        image:''
      }

  }



  // componentDidMount(){
  //   var userId = firebase.auth().currentUser.uid;
  //   var userEmail = firebase.auth().currentUser.email
    
  //   this.setState({user:userId,userEmail:userEmail})
  // }



  async componentDidMount(){
    var dataPushPromise = new Promise( (res,rej)=>{
    var userId = firebase.auth().currentUser.uid;
    var userEmail = firebase.auth().currentUser.email

    this.setState({user:userId,userEmail:userEmail})
    
    res()
    rej('Operation Failed: Data From Firebase does not push in state successfully')
  } )
  dataPushPromise.then(()=>{
    


  },(err)=>{
    alert(err)
  })

}


changeHandler = (e)=>{
this.setState({[e.target.name]: e.target.value})

console.log(this.state.image)
}



saveImage = ()=>{
firebase.database().ref('myImage').set({imageLink: this.state.image})
alert('Image save successfully')
this.setState({image:''})
}









    Logout= ()=>{
        firebase.auth().signOut();
    }

    render(){
        return(
          <div>
         <br/>
         <div className='container' style={{textAlign:'right'}}> <button className="waves-effect waves-dark btn red" onClick={this.Logout}>Logout</button> </div> 
         
         
          <div className='container'>
          <input type='text' name='image' value={this.state.image} onChange={this.changeHandler} placeholder='Image link'/>
          <button onClick={this.saveImage}> Save </button>
          </div>
         




       

        </div>
        )
    }


  }

export default Logout;