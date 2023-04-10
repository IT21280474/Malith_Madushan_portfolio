import React from 'react'
import Toggle from '../Toggel/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'



const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
        <div className="n-name">Malith</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>

        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>  
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                <li>Services</li>  
                </Link>
                <Link spy={true} to='Experience' smooth={true} >
                <li>Experience</li>  
                </Link>
                <Link spy={true} to='portfolio' smooth={true} >
                <li>portfolio</li>  
                </Link>
                {/*<Link spy={true} to='Testimonial' smooth={true} >
                <li>testimonial</li>  
  </Link>*/}
                
            </ul>
           
        </div>
        <button className="button n-button">
            Contact
        </button>
        </div> 
    </div>
  )
}

export default Navbar

