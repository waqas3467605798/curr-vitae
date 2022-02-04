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
      educationInfoArray:[],
      // pageLoading:false,
      objectiveHeading:'Loading....',
      personalInfoHeading:'Loading....',
      educationInfoHeading:'Loading....',
      pageRefresh:1
      
     
    }
  }

  // async
  // componentDidMount
  // componentWillMount
  async componentDidMount(){
    // var userId = firebase.auth().currentUser.uid;
    // var userEmail = firebase.auth().currentUser.email
    // this.setState({user:userId,userEmail:userEmail})
var dataPromise = new Promise( (res,rej)=>{


firebase.database().ref('myImage').on('child_added' , (data)=> { 
  this.setState({image:data.val()})
    //  this.state.image.push(data.val())
    }  )



firebase.database().ref('objective').on('child_added' , (data)=> { 
  this.setState({objective:data.val()})
    //  this.state.image.push(data.val())
    }  )




var dataObject = {
  personalInfo:[],
  educationInfo:[],

}


firebase.database().ref('personalInfo').on('child_added' , (data)=> { 
    //  this.state.personalInfoArray.push(data.val())
     dataObject.personalInfo.push(data.val())
    }  )





firebase.database().ref('educationInfo').on('child_added' , (data)=> { 
    //  this.state.educationInfoArray.push(data.val())
     dataObject.educationInfo.push(data.val())
    }  )

res(dataObject)




} )



dataPromise.then( (dataObj)=>{
this.setState({personalInfoArray:dataObj.personalInfo, educationInfoArray:dataObj.educationInfo})



setTimeout(() => {
  this.setState({objectiveHeading:'Objective', personalInfoHeading:'Personal Information', educationInfoHeading:'Education Information'})


}, 2000);




} )







const inteId = setInterval(()=>{
  this.setState({pageRefresh: this.state.pageRefresh+1})
},1000)


setTimeout(() => {
  clearInterval(inteId);
}, 20000);






  }



  



    render(){
      return(
        <div>
          {/* <span style={{fontSize:'12px'}}><b style={{color:'green',marginLeft:'30px'}}>{this.state.userEmail}</b> / {navigator.onLine===true ? <span style={{color:'green'}}>You are online</span> : <span style={{color:'red'}}>You are OffLine</span>}</span> */}
        <div className='container'>
         
         <p> <span>State is refreshing for</span> {this.state.pageRefresh} <span>Seconds</span></p>
        
        <img src={this.state.image} alt='Picture Loading.....' width='200' height='170'/>
         <br/>
        <span style={{color:'blue'}}><b>{this.state.objectiveHeading}</b></span>
        <p>{this.state.objective}</p>


        <span style={{color:'blue'}}><b>{this.state.personalInfoHeading}</b></span>
        <table><tbody>{this.state.personalInfoArray.sort((a, b) => (a.order > b.order) ? 1 : -1).map((item,ind)=>{return <tr key={ind}><td>{item.order}</td><td>{item.head}</td><td>{item.ans}</td></tr>})}</tbody></table>



      <span style={{color:'blue'}}><b>{this.state.educationInfoHeading}</b></span><br/>
      <table><tbody>{this.state.educationInfoArray.sort((a, b) => (a.order > b.order) ? 1 : -1).map((item,ind)=>{return <tr key={ind}><td>{item.order}</td><td>{item.degree}</td><td>{item.university}</td><td>{item.grade}</td><td> <a href={item.degreeImageLink} target='_blank'> View Degree </a> </td></tr>})}</tbody></table>


        </div>


        





</div>
      );
    }
  
}

export default MyDocs






