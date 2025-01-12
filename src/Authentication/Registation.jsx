import React from 'react'
import classes from './Authentication.module.css'
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Registation() {

    const navigate = useNavigate()

    const[userData,setuserData] = useState({

        firstName:'',
        Email:'',
        password:'',
        confirmPassword:''
    })

    const[userValidate,setuserValidate] = useState(true)
    const[error,seterror] = useState({})

    const handleUserData = (event)=>{
        event.preventDefault()
        console.log(userData)

        let isValidate = true
        let validateError = {}

        if(userData.firstName === '' || userData.firstName === null){

            isValidate = false
            validateError.firstName = 'First name Required'
        }
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
        if(userData.confirmPassword !== userData.password){
            isValidate = false
            validateError.confirmPassword = 'Password does not match'
        }

        setuserValidate(isValidate)
        seterror(validateError)

        if(Object.keys(validateError).length === 0){

            axios.post('http://localhost:9000/users',userData)
            .then((fetchData)=>{
                console.log(fetchData)
                alert('registration sucsessfull')
                navigate('/Login')
            })
        }
    }

  return (
    <div className={classes.authentication}>
        <div className={classes.authenticationGrid}>
            <div className={classes.backgroundImg}></div>
            <div className={classes.RegisterForm}>
                <div className={classes.RegisterBox}>
                    <h2>Create an account</h2>
                    <p>Please create an account to continue using our service</p>
                    <div className={classes.form}>
                        <form action="" onSubmit={handleUserData}>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><IoPersonOutline/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Full Name</label>
                                  {/* //By using spread operator getting a pervious data */}
                                  <input type="text" onChange={(e)=>setuserData({...userData,firstName:e.target.value})} placeholder='Enter Your Name' />
                                  {userValidate ? '':<span className={classes.error}>{error.firstName}</span>}
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><IoMailOutline/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Email</label>
                                  <input type="Email" onChange={(e)=>setuserData({...userData,Email:e.target.value})} placeholder='Enter Your Email' />
                                  {userValidate ? '':<span className={classes.error}>{error.Email}</span>}
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><RiLockPasswordLine/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Password</label>
                                  <input type="password" onChange={(e)=>setuserData({...userData,password:e.target.value})} placeholder='Enter Your Password' />
                                  {userValidate ? '':<span className={classes.error}>{error.password}</span>}
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><RiLockPasswordLine/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Confirm Password</label>
                                  <input type="password" onChange={(e)=>setuserData({...userData,confirmPassword:e.target.value})} placeholder='Confirm Password' />
                                  {userValidate ? '':<span className={classes.error}>{error.confirmPassword}</span>}
                                </div>
                            </div>
                            <button>CREATE AN ACCOUNT </button>
                        </form>
                    </div>
                    <div className={classes.LoginPage}>
                     <p>Already have an account? <Link to='/Login'>Log in</Link> </p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registation