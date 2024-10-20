import React, { useState } from 'react'
import { Link  ,useNavigate} from 'react-router-dom'

const Signup = () => {

    const[credenditals , setcredenditals] = useState({name:"", email:"",password:"", geolocation:""})
    let navigate = useNavigate ()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(JSON.stringify({name:credenditals.name , email:credenditals.email ,password:credenditals.password ,location:credenditals.geolocation}))
        const  response =  await fetch("http://localhost:5000/api/creatuser",{
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
          navigate("/login")
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credenditals.name} onChange={onchange} />
</div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credenditals.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credenditals.password} onChange={onchange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="location" className="form-label">address</label>
    <input type="text" className="form-control" name='geolocation' value={credenditals.geolocation} onChange={onchange} />
</div>

   <button type="submit" className="btn m-3 btn-primary">Submit</button>
   <Link to="/login" className='m-3  btn btn-danger'>Already user</Link>
</form>

    </div>
    </>
  )
}

export default Signup