import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
//import Resume from './Malith Madushan Liyanage Cv.pdf'

import {themeContext} from '../../Context';
import { useContext } from "react";

import {motion} from 'framer-motion';




const Services = () => {
  
  const transition = {duration : 1 ,type: 'spring'}

  const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/*left side */}
      <div className="awesome">
        <span style={{
      color : darkMode? 'white': ''
    }}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br/> Commodi repellendus quo vitae sunt numquam beatae velit <br/> omnis! Sed veniam suscipit illum maiores aut  obcaecati perspiciatis <br/> rem, consequatur ducimus illo ad.

        </span>
        <a >
            <button className='button s-button'>Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div> 
        


      </div>
        {/*rightside */}
      <div className="cards">

        {/*First Card */}
        <motion.div 
        initial = {{ left: '25rem'}}
        whileInView={{left:'14rem'}}
        transition = {transition}
        
        
        style={{left:'14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading ={'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd  "}/>
        </motion.div>

        {/*Second Card */}
        <motion.div 
        initial = {{top:'12rem', left: '-15rem'}}
        whileInView={{left:'-4rem'}}
        transition = {transition}
        
        
        style={{top:'12rem', left:'-4rem'}}>
            <Card
            emoji = {Glasses}
            heading ={'Developer'}
            detail = {"C++ , Html, Css, JavaScript, Java ,React "}/>
        </motion.div>

        {/*Second Card */}
        <motion.div 
        initial = {{top:'19rem', left: '20rem'}}
        whileInView={{left:'12rem'}}
        transition = {transition}
        
        
        style={{top:'19rem', left:'12rem'}}>
            <Card
            emoji = {Humble}
            heading ={'UI/UX'}
            detail = {
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }/>
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
