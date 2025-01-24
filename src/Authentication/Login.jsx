import React from 'react'
import classes from './Authentication.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {

    let navigate = useNavigate()

    const[userData,setuserData] = useState({
            Email:'',
            password:'',
        })
    
        const[userValidate,setuserValidate] = useState(true)
        const[error,seterror] = useState({})


    const HandleLoginData = (event)=>{

        event.preventDefault()

        let isValidate = true
        let validateError = {}

        if(userData.Email === '' || userData.Email === null){
            isValidate = false
            validateError.Email = 'Email Required'
        }
        else if(!/\S+\S+\S\.+/.test(userData.Email)){
            isValidate = false
            validateError.Email = 'Email is not valid'
        }
        if(userData.password === '' || userData.password === null){
            isValidate= false
            validateError.password = 'Password is Required'
        }
        else if(userData.password.length >= 8){
            isValidate = false
            validateError.password ='Password length atleast 8 character'
        }

        if(isValidate){
            axios.get('http://localhost:9000/users')
         .then((userdata)=>{

           const user = userdata.data.find((data)=>
            data.Email === userData.Email && data.password === userData.password)

           if(user){
            alert('login succesfully')
            localStorage.setItem("user",JSON.stringify(user))
            navigate('/')
           }
           else{
            seterror(validateError)
            setuserValidate(isValidate)
           }
         })
        }  
    }

  return (
     <div className={classes.authentication}>
            <div className={classes.authenticationGrid}>
                <div className={classes.backgroundImg}></div>
                <div className={classes.RegisterForm}>
                    <div className={classes.RegisterBox}>
                        <h2>Welcome</h2>
                        <p>Sign in to your account to continue</p>
                        <div className={classes.form}>
                            <form action="" onSubmit={HandleLoginData}>
                                <div className={classes.RegisterField}>
                                    <div className={classes.Nameicon}>
                                      <p><IoMailOutline/></p>
                                    </div>
                                    <div className={classes.Nameinput}>
                                      <label htmlFor="">Email</label>
                                      <input type="Email" onChange={(e)=>setuserData({...userData,Email:e.target.value})} placeholder='Enter Your Email' required />
                                      {userValidate ? '':<span className={classes.error}>{error.Email}</span>}
                                    </div>
                                </div>
                                <div className={classes.RegisterField}>
                                    <div className={classes.Nameicon}>
                                      <p><RiLockPasswordLine/></p>
                                    </div>
                                    <div className={classes.Nameinput}>
                                      <label htmlFor="">Password</label>
                                      <input type="password" onChange={(e)=>setuserData({...userData,password:e.target.value})} placeholder='Enter Your Password' required />
                                      {userValidate ? '':<span className={classes.error}>{error.password}</span>}
                                    </div>
                                </div>
                                <button>LOG IN </button>
                            </form>
                        </div>
                        <div className={classes.LoginPage}>
                         <p>Dont't Have An Account Please <Link to='/Registration'>Register</Link> </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login