import React from 'react'
import classes from './Authentication.module.css'
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Registation() {
  return (
    <div className={classes.authentication}>
        <div className={classes.authenticationGrid}>
            <div className={classes.backgroundImg}></div>
            <div className={classes.RegisterForm}>
                <div className={classes.RegisterBox}>
                    <h2>Create an account</h2>
                    <p>Please create an account to continue using our service</p>
                    <div className={classes.form}>
                        <form action="">
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><IoPersonOutline/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Full Name</label>
                                  <input type="text" placeholder='Enter Your Name' />
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><IoMailOutline/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Email</label>
                                  <input type="Email" placeholder='Enter Your Email' />
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><RiLockPasswordLine/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Password</label>
                                  <input type="password" placeholder='Enter Your Password' />
                                </div>
                            </div>
                            <div className={classes.RegisterField}>
                                <div className={classes.Nameicon}>
                                  <p><RiLockPasswordLine/></p>
                                </div>
                                <div className={classes.Nameinput}>
                                  <label htmlFor="">Confirm Password</label>
                                  <input type="password" placeholder='Confirm Password' />
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