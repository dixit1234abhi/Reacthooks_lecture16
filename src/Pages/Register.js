import React from 'react'

export default function Register() {
  
    let sendData = () => {

      let data = {
        "username": "saksham",
        "email": "saksham@gmail.com",
        "password": "saksham@1234"
      }
      fetch('http://localhost:1337/api/auth/local/register',{
      method : "POST",
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }).then((res)=>{res.json()})
    .then((data)=>{
      console.log(data)
    })
    .catch(()=>{})
    }
  
    
  
    return (<>
      
      <form class=' w-25 offset-4'>
      <h1>Register Yourself</h1>
  <div className="mb-3 ">
      <label htmlFor="userName" className="form-label">Username</label>
      <input type="text" name='username' className="form-control" id="userName" aria-describedby="userName" />
      
    </div>
    <div className="mb-3 ">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" name='password' className="form-control" id="password" />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="button" onClick={sendData}  className="btn btn-primary">Submit</button>
  </form>
  </>
  
    )
  
}
