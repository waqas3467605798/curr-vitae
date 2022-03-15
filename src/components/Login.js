import react, {Component , useRef} from 'react'
import '../App.css';
// import {Link, Route,BrowserRouter} from 'react-router-dom'
import firebase from './Fire'
import App from '../App'
import {useReactToPrint} from 'react-to-print'





class PublicView extends Component{
    constructor(){
        super();
        this.state ={
            userEmail:null,
            image:'',
            objective:'',
            reference:'',
            personalInfoArray:[],
            educationInfoArray:[],
            organizationArray:[],
            computerSkillsArray:[],
            // pageLoading:false,
            objectiveHeading:'Loading....',
            personalInfoHeading:'Loading....',
            educationInfoHeading:'Loading....',
            experience:'Loading....',
            computerSkills:'Loading....',
            pageRefresh:0
                
        }

    }


    
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
    
    
    
    firebase.database().ref('reference').on('child_added' , (data)=> { 
      this.setState({reference:data.val()})
        //  this.state.image.push(data.val())
        }  )
    
    
    
    var dataObject = {
      personalInfo:[],
      educationInfo:[],
      organization:[],
      computerSkill:[]
    
    }
    
    
    firebase.database().ref('personalInfo').on('child_added' , (data)=> { 
        //  this.state.personalInfoArray.push(data.val())
         dataObject.personalInfo.push(data.val())
        }  )
    
    
    
    
    
    firebase.database().ref('educationInfo').on('child_added' , (data)=> { 
        //  this.state.educationInfoArray.push(data.val())
         dataObject.educationInfo.push(data.val())
        }  )
    
    
    
        firebase.database().ref('organization').on('child_added' , (data)=> { 
          //  this.state.educationInfoArray.push(data.val())
           dataObject.organization.push(data.val())
          }  )
    
    
    
          firebase.database().ref('computerSkills').on('child_added' , (data)=> { 
            //  this.state.educationInfoArray.push(data.val())
             dataObject.computerSkill.push(data.val())
            }  )
    
    
    
    res(dataObject)
    
    
    
    
    } )
    
    
    
    dataPromise.then( (dataObj)=>{
    this.setState({personalInfoArray:dataObj.personalInfo, educationInfoArray:dataObj.educationInfo, organizationArray:dataObj.organization , computerSkillsArray:dataObj.computerSkill,  objectiveHeading:'Objective', personalInfoHeading:'Personal Information', educationInfoHeading:'Education Information', experience:'Experience Record', computerSkills:'Computer/IT Skills'})
    
    
    
    
    // below code is only for change in state for 35 seconds.
    setTimeout(() => {
      
    
      const inteId = setInterval(()=>{
        this.setState({pageRefresh: this.state.pageRefresh+1})
      },1000)
      
      
      setTimeout(() => {
        clearInterval(inteId);
      }, 35000);
    
    
    
    }, 1000);
    
    
    
    
    
    
    } )
    
    
      }












        
        

    render(){
        return(
        <div className='container'>
            
            <br/><br/>
            <div style={{backgroundColor:'lightgray'}}>
            <h5 style={{textAlign:'center', margin:'0px'}}><b>PERSONAL PROFILE</b></h5>
            <p style={{textAlign:'center',margin:'0px'}}>https://profile-my.web.app</p>
            </div>
            <br/>






{/* image div */}
<div className='row'>
    {/* first Column */}
    <div className='col s4'>
<img src={this.state.image} alt='Picture Loading...' width='90%' height='27%' className='profile-image'/> <br/>

   </div>

    {/* second column */}
   <div className='col s8'>
       
       <span style={{fontSize:'200%'}}><b>Waqas Saleem</b></span><br/><hr/>
       <span style={{fontSize:'150%'}}>Contact: 0346-7605798</span><br/><hr/>
       <span style={{fontSize:'100%'}}>waqas.mba86@gmail.com</span><br/><hr/>
       <span style={{fontSize:'100%'}}>ST-7, P-4671/6, Mansoorabad, 66-Foota bazar, Faisalabad.</span><br/><hr/>
       <span style={{fontSize:'100%'}}><b>web: </b> https://profile-my.web.app</span><hr/>
   </div>
</div>








<hr/>
{/* Objective Div */}
<span style={{fontSize:'20px', color:'blue'}}><b>Objective</b></span>
<p>{this.state.objective}</p>








<hr/>
<br/>
<span style={{fontSize:'20px', color:'blue'}}><b>Education</b></span>






        </div>
        )
    }
}





//This Component is made to show the all App you made
class LoginCompo extends Component{
    constructor(){
        super();
        this.state ={
                user:null,
                
        }

    }


    componentDidMount(){
        this.authListener();
        
        }
        
        authListener = ()=>{
        firebase.auth().onAuthStateChanged( (user)=>{
            if(user){
                this.setState({user})
                // console.log(user.email)
        
        
            } else {
                this.setState({user:null})
            }
        })
        }

    render(){
        return(
        <div>

            

{this.state.user ? (<App/>) : <LoginForm/>}

        </div>
        )
    }
}

// export default Login;









//THis Component is made to login by the user (it is login form)
class LoginForm extends Component{
   
    constructor(){
        super();
        this.state ={
                forgetStatus:false,
                forgetEmial:'',
                wait:''
                
        }

    }




    signin = ()=>{
     const email = document.querySelector('#email').value;
     const password = document.querySelector('#password').value;
     
 
 
 
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then( (u)=>{
 
         // console.log(u.user.uid)
         // console.log(u)
         
     } )
     .catch( (err)=>{
         alert('Your Password is incorrect or you are not registered.')
         console.log('error')
     } )
 




this.setState({wait:'Please Wait'})




    } 
 
 



    showForgetField = ()=>{
        this.setState({forgetStatus:true})
    }


    changeHandler = (e)=>{
        this.setState({forgetEmial: e.target.value})

        console.log(this.state.forgetEmial)
    }


    ressetPassword = ()=>{

        firebase.auth().sendPasswordResetEmail(this.state.forgetEmial)
        .then(()=>{
            alert('Please check email and reset your password')
        }).catch((error)=>{
            alert(error)
        })

    }





     render(){
         return (
             <div>
 
 {/* <div id='div1'> 
      My Documents
      </div> */}
      {/* <span style={{fontSize:'12px'}}>{navigator.onLine===true ? <span style={{color:'green'}}>You are online</span> : <span style={{color:'red'}}>You are OffLine</span>}</span> */}
<br/><br/>

<h2 className='headings' style={{textAlign:'center',fontSize:'30px'}}>Login Here</h2>

             <div className="row container">
             <div className="col s12">
              
              
              
               <div className="input-field">
              <input placeholder="Email" id="email" type="text" className="validate" />
              {/* <label forhtml="first_name">First Name</label> */}
               </div>
 
               <div className="input-field">
              <input placeholder="Password" id="password" type="password" className="validate" />
              {/* <label forhtml="first_name">First Name</label> */}
               </div>
 
               <button className="waves-effect btn-large" onClick={this.signin}>Login</button>

                <a href='#' onClick={this.showForgetField}>Forget Password ?</a>


                <p>{this.state.wait}</p>

<br/><br/><br/>

                
                <div className={this.state.forgetStatus === false ? 'display' : ''}>
                <p><b style={{color:'green'}}>Pleae enter your email address in below field on which you want to reset your Password</b></p>
                <input type='text' value={this.state.forgetEmial} name='forgetEmail' onChange={this.changeHandler} placeholder='Write Email here' />
                <button onClick={this.ressetPassword} className="waves-effect btn-large">Resset</button>
                
                </div>


              </div>
              </div>
 


              {/* <br/><br/>
<div className='bottomLine'> 
Prepared By: Waqas Saleem <br/>
Easy Accounts Management System<br/>
Contact: 0346-7605798 Email: waqas_mba86@yahoo.com
</div> */}


             </div>
         )
     }
 }










 const Login = ()=>{

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: ()=>componentRef.current,
    })
    
      return(
        <div>
        <PublicView ref={componentRef}/>
        <div><a href='#' onClick={handlePrint}>Print Report</a></div>
        <br/><br/><br/><br/>
        <LoginCompo />
    
    
        
        </div>
      )
    }
    
    
    
    export default Login;