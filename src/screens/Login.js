import React from 'react'
import { useState } from 'react'
import { Link , useNavigate  } from 'react-router-dom'


const Login = () => {
  const[credenditals , setcredenditals] = useState({email:"",password:""})

   let navigate = useNavigate ()
  const handleSubmit = async(e) =>{
      e.preventDefault();
      
      const  response =  await fetch("http://localhost:5000/api/loginuser",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name:credenditals.name, email: credenditals.email, password: credenditals.password, location: credenditals.geolocation })
      });
         
      const json = await response.json()
      console.log(json);
             
      if(!json.success){
        alert("enter good ")
      }
      if(json.success){
        localStorage.setItem("authToken" ,  json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }

  }

const onchange =(event) =>{
    setcredenditals({...credenditals,[event.target.name]:event.target.value})
   
  }

  
  return (
   <>
   <div className='container'>
       <form onSubmit={handleSubmit}>

 

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credenditals.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credenditals.password} onChange={onchange}/>
  </div>

 

   <button type="submit" className="btn m-3 btn-primary">Submit</button>
   <Link to="/creatuser" className='m-3  btn btn-danger'>i am new </Link>
</form>

    </div>
   </>
  )
}

export default Login