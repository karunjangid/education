import React, {useState} from 'react'
import '../../App.css'
import Img from '../../assets/image.png'
import Logo from '../../assets/logo.png'
import { FaCaretDown, FaLanguage, FaHandshake,FaInfo,FaInternetExplorer } from "react-icons/fa";
import { FaLocationDot,FaMoon,FaFolderTree } from "react-icons/fa6";
import { GiOnTarget,GiMagicPortal } from "react-icons/gi";
import { PiGraduationCapFill,PiBagSimpleFill } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import Slider from '../slider/Slider'

const First = () => {
    const [Show,setShow] = useState(false);

    const handle = () => {
        setShow(!Show)
    };
    
  return (
    <>


    {/* Upnav start */}
        <div className="upnav">
            <div className="part1">
            <p><img src={Img}/><a href="https://www.india.gov.in/"> भारत सरकार | Government of india </a></p>
            </div>
            <div className="part2">
                <ul className='part2-ul'>
                <li><a href="">Skip to main content</a></li>
                <li><a href="https://maps.app.goo.gl/SN5YzmUYUYed3iNJ9"><FaLocationDot />location <FaCaretDown /></a></li>
                <li onClick={handle} style={{color:"white",display:"flex",gap:"10px"}}><FaLanguage /> English <FaCaretDown />
                {
                    Show && (
                        <ul className='drop'>
                            <li><a href="">हिन्दी</a></li>
                            <li><a href="">English</a></li>
                            <li><a href="">ગુજરાતી</a></li>
                            <li><a href="">ଓଡିଆ</a></li>
                            <li><a href="">বাংলা</a></li>
                        </ul>
                    )
                }
                </li>
                <li><a href=""><FaMoon /></a></li>
                <li><a href=""><FaFolderTree /></a></li>
                </ul>
            </div>
        </div>
    {/* Upnav end */}


    {/* Navbar started */}
    <div className="navbar">
        <div className="logo">
            <img src={Logo} alt="Logo"/>
        </div>
        <div className="navelement">
            <ul className="navlist">
                <li><a href=""><GiOnTarget />Karma Targets</a></li>
                <li><a href=""><GiMagicPortal />Recommended </a></li>
                <li><a href=""><PiGraduationCapFill />Courses</a></li>
                <li><a href=""><PiBagSimpleFill />Job Fair</a></li>
                <li><a href=""><FaHandshake />Our Partners</a></li>
                <li><a href=""><GrGroup />Team</a></li>
                <li><a href=""><FaInfo />About Us</a></li>
                <li><a href="https://karma-nu.vercel.app/Carrer.html"><FaInternetExplorer />Internship</a></li>
            </ul>
        </div>
        <div className="button-login-signup">
            <button >LOGIN</button>
            <button style={{backgroundColor:"green",color:"white"}}>REGISTER</button>
        </div>
    </div>


    {/* Navbar ended */}

    {/* Home started */}
    
    <Slider />

    {/* Home ended */}
    </>
  )
}

export default First