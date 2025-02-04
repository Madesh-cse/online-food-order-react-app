import { useState } from 'react'
import classes from './AppComponent.module.css'
import { Link } from 'react-router-dom'
export default function AppComponentItem(){

    const[Email,setEmail] = useState(true)

    const HandleEmail = ()=>setEmail(!Email)
    return(
        <section className={classes.AppComponent}>
            <div className={classes.AppFlex}>
                <div className={classes.AppImg}>
                    <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />
                </div>
                <div className={classes.AppContent}>
                    <h1>Get the Kinetic Food App</h1>
                    <p>We will send you a link, open it on your phone to download the app</p>
                    <div className={classes.AppInput}>
                        <input type="radio"  onClick={HandleEmail} defaultChecked />
                        <span>Email</span>
                        <input type="radio"  onClick={HandleEmail} />
                        <span>Phone</span>
                    </div>
                    <div className={classes.SearchInput}>
                        {Email? <input type="text"  placeholder='Email'/>:<input type='number' placeholder='phone Number'/>}
                        <button>Share App Link</button>
                    </div>
                    <p className={classes.AppDownload}>DownLoad app from</p>
                    <div className={classes.AppLink}>
                        <Link   ><img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' alt=''/></Link>
                        <Link to='https://play.google.com/store/games?device=windows&pli=1'><img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' alt=''/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}