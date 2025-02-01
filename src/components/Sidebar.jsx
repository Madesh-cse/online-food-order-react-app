import { useState } from 'react';
import classes  from './Sidebar.module.css'
import Logo from '../asset/logo.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { SiCompilerexplorer } from "react-icons/si";
import { FaVaadin } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { PiGreaterThanBold } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import ExtraPageList from './ExtraPage';
export default function SideBar(){


const [isOpen,setIsOpen] = useState(false);
const[popup,setpopup] = useState(true)
const[opensidebar,setopensidebar] = useState(false)

function HandleExtraPage(){
    setIsOpen((prevState)=>!prevState)
    console.log('open')
}

function Handlepopup(){
    setpopup(false)
}

function handleSidebar(){
    setopensidebar(!opensidebar)
}
    return(
        <aside>
            <div className={classes.sidebar}>
                <div className={classes.Logo}>
                    <a href='ww'>
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className={classes.navlist}>
                    <ul>
                        <li>
                            <NavLink to='/' className={({isActive})=>isActive ? classes.active:undefined} end  ><span><IoHomeOutline/></span> HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='explore' className={({isActive})=>isActive ? classes.active:undefined} ><span><SiCompilerexplorer/></span>EXPLORE</NavLink>
                        </li>
                        <li>
                            <NavLink to='OrderSuccessfull' className={({isActive})=>isActive ? classes.active:undefined} > <span><FaVaadin/></span>FAVOURITE</NavLink>
                        </li>
                        <li>
                            <NavLink to='OrderDetails' className={({isActive})=>isActive ? classes.active:undefined} > <span><FaBorderAll/></span>ORDERS</NavLink>
                        </li>
                        <li>
                            <NavLink to=''className={({isActive})=>isActive ? classes.active:undefined} ><span><MdOutlineMessage/></span>MESSAGE</NavLink>
                        </li>
                        <li>
                            <NavLink to=''className={({isActive})=>isActive ? classes.active:undefined } ><span><IoMdSettings/></span> SETTING</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={HandleExtraPage}  className={classes.extrapage} > <span><IoMdSettings/></span> EXTRA PAGE <span className={classes.arrow}><PiGreaterThanBold/></span></NavLink>
                        </li>
                        
                    </ul>
                </div>
                {isOpen?<ExtraPageList/>:''}
                {popup?<div className={classes.popup}>
                    <button onClick={Handlepopup}>x</button>
                    <div className={classes.popupSymbol}>
                        <MdFastfood/>
                    </div>
                    <div className={classes.popupContent}>
                        <p>Free delivery on <br />all orders over <span> $25</span></p>
                        <p className={classes.words}>It is a limited time offer that <br />will expire soon.</p>
                    </div>
                    <div className={classes.orderBtn}>
                        <Link>Order Now <FaArrowRightLong/></Link>
                    </div>
                </div>:''}
                
                <div className={classes.author}>
                   <div className={classes.authorContent}>
                    <span><IoIosContact /></span>
                    <div className={classes.authorName}>
                        <h5>Madesh</h5>
                        <p className={classes.authorgmail}>madesh@gmail.com</p>
                    </div>
                   </div>
                </div>
                <button onClick={handleSidebar}>close</button>
            </div>
        </aside>
    )
}