import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/my profile1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion';
import Ai from '../../img/Ai.png';
import XD from '../../img/XD.png';
import PS from '../../img/PS.png';
import Pr from '../../img/Pr.png';
import Ae from '../../img/Ae.png';
import Lr from '../../img/Lr.png';



const Intro = () => {

    const transition = {duration : 2 ,type: 'spring'}

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{
      color : darkMode? 'white': ''
    }} >Hi I am Malith</span>
                <span>Malith Madushan</span> 
                <span>
                    Fullstack Developer with high level 
                    of experience in web and mobile app designing
                    and Professional grahpic designer ,Video Editor 
                    and 2D and 3D Animator,producting Quality work
                </span>
            </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/IT21280474">
                        <img src={Github} alt="" />
                    </a>
                   <a href="https://www.linkedin.com/in/malith-madushan 810788218/">
                        <img src={LinkedIn} alt="" />
                   </a>
                    <a href="https://www.instagram.com/malithmadushan5112/">
                        <img src={Instagram} alt="" />
                    </a>
                    
                </div>
        
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />

            <motion.img
                initial = {{left: '-36%'}}
                whileInView={{left:'-24%'}}
                transition = {transition}
            
            src={glassesimoji} alt="" />

            <motion.div
            initial = {{top: '-4%', left: '100%'}}
            whileInView={{left:'68%'}}
            transition = {transition}

            style={{top: '-4%' , left: '68%'}}
            className='floating-div'
            
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
            initial = {{top: '50%', left: '85%'}}
            whileInView={{left:'68%'}}
            transition = {transition}

            style={{top: '-4%' , left: '68%'}}
            className='floating-div'
            
            >
                <FloatingDiv image={Crown} txt1='Graphic' txt2='Designer'/>
            </motion.div>

            <motion.div
             initial = {{top: '18rem', left: '-9rem'}}
             whileInView={{left:'0rem'}}
             transition = {transition}

             style={{top:'18rem' , left:'0rem'}}
             className='floating-div'
             >
                <FloatingDiv image={thumbup} txt1='Quality Design' txt2='Award'/>   
                </motion.div> 

                <motion.div className="adobe"
                initial = {{}}
                whileInView={{left:'0rem'}}
                transition = {transition}
                style={{top:'350px', right:'-300px'}}
                
                >
                    <img src={PS} alt="" />
                    <img src={Lr} alt="" />
                    <img src={Ai} alt="" />
                    <img src={Pr} alt="" />
                    <img src={Ae} alt="" />
                    <img src={XD} alt="" />
                </motion.div>
            
            {/*blur divs */}
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
            <div className='blur' style={{background:"#C1F5FF", top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
