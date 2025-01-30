import userimage from '../asset/ExploreCollection/userprofile.png'
import classes from './userProfile.module.css'
import { FaAngleDown } from "react-icons/fa6";
import { useState,useRef } from 'react'

export default function UserProfile({handleLogout}){

    const inputRef = useRef(null)

    const[open,setopen] = useState(false)

    const[UserImage,setUserImage] =useState()

    const handleDropdown = ()=>{

        setopen((prevState)=>!prevState)
    }

    const handleImageClick = ()=>{
        inputRef.current.click()
    }

    const handleImageChange = (event)=>{

        const userFile = event.target.files[0];
        // console.log(userFile)
        setUserImage(userFile)
    }
    return(
        <>
         <div className={classes.userprofile} onClick={handleImageClick}>
           {UserImage ? <img src={URL.createObjectURL(UserImage)} alt='user'/>: <img src={userimage} alt="user" />}
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:'none'}} />
         </div>
         <span className={classes.dropdownbtn} onClick={handleDropdown}><FaAngleDown/></span>
         {open &&(
            <div className={classes.dropdown}>
                <button onClick={handleLogout}>Logout</button>
               <ul>
                 <li>userprofile</li>
                 <li>main</li>
               </ul>
          </div>
         )}
        
        </>
       
    )
}