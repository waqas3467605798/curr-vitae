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
        image:'',
        objective:'',
        personalInfoHead:'',
        personalInfoAns:'',
        personalInfoOrder:''
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
alert('Image saved successfully')
this.setState({image:''})
}




saveObjective = ()=>{
  firebase.database().ref('objective').set({objective: this.state.objective})
  alert('objective saved successfully')
  this.setState({objective:''})
  }




savePersonalInfo = ()=>{
var object = {}
// object.[this.state.personalInfoHead] = this.state.personalInfoAns;
object.head = this.state.personalInfoHead;
object.ans = this.state.personalInfoAns;
object.order = this.state.personalInfoOrder;

var key = firebase.database().ref('personalInfo').push().key
object.key = key;
      
firebase.database().ref('personalInfo').child(key).set(object)


alert('Information saved successfully')
  this.setState({personalInfoHead:'', personalInfoAns:'', personalInfoOrder:''})

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
            <span style={{color:'blue'}}><b>Image Link</b></span>
          <input type='text' name='image' value={this.state.image} onChange={this.changeHandler} placeholder='Image link'/>
          <button onClick={this.saveImage}> Save </button>
          
<br/><br/><br/>
          <span style={{color:'blue'}}><b>objective</b></span>
          <input type='text' name='objective' value={this.state.objective} onChange={this.changeHandler} placeholder='Obective'/>
          <button onClick={this.saveObjective}> Save </button>
          

<br/><br/><br/>
          <span style={{color:'blue'}}><b>Personal Information</b></span>
          <input type='text' name='personalInfoHead' value={this.state.personalInfoHead} onChange={this.changeHandler} placeholder='Head Name'/>
          <input type='text' name='personalInfoAns' value={this.state.personalInfoAns} onChange={this.changeHandler} placeholder='Answer'/>
          <input type='Number' name='personalInfoOrder' value={this.state.personalInfoOrder} onChange={this.changeHandler} placeholder='Order'/>
          <button onClick={this.savePersonalInfo}> Save </button>

          
          
          </div>
         




       

        </div>
        )
    }


  }

export default Logout;