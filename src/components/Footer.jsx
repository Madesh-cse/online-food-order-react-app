import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import classes from './Footer.module.css'
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <section className={classes.FooterWidth}>
            <div className={classes.FooterInnerWidth}>
                <h3>Kinetic Food App</h3>
             <div className={classes.language}>
                <select name="country" id="country">
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                </select>
                <select name="language" id="language">
                    <option value="">English</option>
                    <option value="">Trukce</option>
                    <option value="">Hindi</option>
                    <option value="">Tamil</option>
                    <option value="">Indonesia</option>
                    <option value="">Italine</option>
                    <option value="">Veitnamese</option>
                </select>
             </div>
            </div>
            <div className={classes.FooterContent}>
                <div className={classes.About}>
                    <h3>ABOUT Kinetic Food App</h3>
                    <ul>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Work With Us</li>
                        <li>Investor Relations</li>
                        <li>Report Fraud</li>
                        <li>Press Kit</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={classes.Zomaverse}>
                    <h3>Zomaverse</h3>
                    <ul>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Work With Us</li>
                        <li>Investor Relations</li>
                        <li>Report Fraud</li>
                        <li>Press Kit</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={classes.Restaurants}>
                    <h3>For Restaurants</h3>
                    <ul>
                        <li>Partner With us</li>
                        <li>App For You</li>
                    </ul>
                </div>
                <div className={classes.Learn}>
                    <h3>Learn More</h3>
                    <ul>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className={classes.Social}>
                    <h3>Social links</h3>
                    <ul>
                        <li><FaLinkedin/></li>
                        <li><FaInstagramSquare/></li>
                        <li><FaSquareXTwitter/></li>
                        <li><FaYoutube/></li>
                       <li><FaFacebook/></li>
                    </ul>
                    <div className={classes.AppLinK}>
                        <div className={classes.googlePlay}>
                          <Link to='https://play.google.com/store/games?device=windows&pli=1'><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></Link>
                        </div>
                        <div className={classes.AppStore}>
                        <Link to='https://play.google.com/store/games?device=windows&pli=1'><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008 <br />-2024 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </section>
    )
}