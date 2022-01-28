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
      objective:'',
      personalInfoArray:[],
      educationInfoArray:[]
     
    }
  }


async componentDidMount(){
    // var userId = firebase.auth().currentUser.uid;
    // var userEmail = firebase.auth().currentUser.email
    // this.setState({user:userId,userEmail:userEmail})



firebase.database().ref('myImage').on('child_added' , (data)=> { 
  this.setState({image:data.val()})
    //  this.state.image.push(data.val())
    }  )



firebase.database().ref('objective').on('child_added' , (data)=> { 
  this.setState({objective:data.val()})
    //  this.state.image.push(data.val())
    }  )




firebase.database().ref('personalInfo').on('child_added' , (data)=> { 
  // this.setState({objective:data.val()})
     this.state.personalInfoArray.push(data.val())
    }  )





firebase.database().ref('educationInfo').on('child_added' , (data)=> { 
  // this.setState({objective:data.val()})
     this.state.educationInfoArray.push(data.val())
    }  )


  }







    render(){
      return(
        <div>
          {/* <span style={{fontSize:'12px'}}><b style={{color:'green',marginLeft:'30px'}}>{this.state.userEmail}</b> / {navigator.onLine===true ? <span style={{color:'green'}}>You are online</span> : <span style={{color:'red'}}>You are OffLine</span>}</span> */}
        <div className='container'>
        
        
        <img src={this.state.image} alt='Picture Loading.....' width='200' height='170'/>
      <br/>
        <span style={{color:'blue'}}><b>Obective</b></span>
        <p>{this.state.objective}</p>


        <span style={{color:'blue'}}><b>Personal Information</b></span>
        <table><tbody>{this.state.personalInfoArray.sort((a, b) => (a.order > b.order) ? 1 : -1).map((item,ind)=>{return <tr key={ind}><td>{item.order}</td><td>{item.head}</td><td>{item.ans}</td></tr>})}</tbody></table>



<span style={{color:'blue'}}><b>Educational Information</b></span><br/>
{this.state.educationInfoArray.sort((a, b) => (a.order > b.order) ? 1 : -1).map((item,ind)=>{return <span key={ind}>{item.order}-{item.degree}<br/>{item.university}<br/>{item.grade}<hr/></span>})}



        </div>
</div>
      );
    }
  
}

export default MyDocs






