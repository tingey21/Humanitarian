import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './WhyUs.css'
import logo from '../logo/logo.png'
import Header from '../LandingPage/header'
export default class WhyUs extends Component {
  render() {
    return (
      <div className = "page">
         <div className = "brown"></div>
         
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#FFFF"}}>  <div className = 'headerLink'> <div className = 'arrow'></div>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink'>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink' >Donate</div></Link>
     </div>

     <div className = "hamburger">
             
             <Header />
         </div>
         <div className = 'whiteBack'>
           <h1>Who We Are</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc elit, lobortis eget risus vitae, feugiat vulputate ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consequat ut augue sit amet rutrum. Sed in rutrum erat. Nunc at mi ac velit pretium bibendum. Phasellus eu nisl pharetra, eleifend massa eu, suscipit ex. Integer sit amet massa quam. Ut consequat vehicula maximus. Curabitur mattis, erat vel pharetra porta, nunc enim vehicula elit, non dictum lorem nulla vel mauris. Quisque posuere sollicitudin nisl, eu eleifend risus. Ut varius tellus vestibulum augue porttitor tempus. Sed sit amet semper enim. Donec eu tempus neque. Integer lacinia aliquet vestibulum. Donec in faucibus nunc, in accumsan augue. Pellentesque sit amet sapien mauris.</p>
           <h1> What We Do</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc elit, lobortis eget risus vitae, feugiat vulputate ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consequat ut augue sit amet rutrum. Sed in rutrum erat. Nunc at mi ac velit pretium bibendum. Phasellus eu nisl pharetra, eleifend massa eu, suscipit ex. Integer sit amet massa quam. Ut consequat vehicula maximus. Curabitur mattis, erat vel pharetra porta, nunc enim vehicula elit, non dictum lorem nulla vel mauris. Quisque posuere sollicitudin nisl, eu eleifend risus. Ut varius tellus vestibulum augue porttitor tempus. Sed sit amet semper enim. Donec eu tempus neque. Integer lacinia aliquet vestibulum. Donec in faucibus nunc, in accumsan augue. Pellentesque sit amet sapien mauris.</p>
           <h1> Why You Should Care</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc elit, lobortis eget risus vitae, feugiat vulputate ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consequat ut augue sit amet rutrum. Sed in rutrum erat. Nunc at mi ac velit pretium bibendum. Phasellus eu nisl pharetra, eleifend massa eu, suscipit ex. Integer sit amet massa quam. Ut consequat vehicula maximus. Curabitur mattis, erat vel pharetra porta, nunc enim vehicula elit, non dictum lorem nulla vel mauris. Quisque posuere sollicitudin nisl, eu eleifend risus. Ut varius tellus vestibulum augue porttitor tempus. Sed sit amet semper enim. Donec eu tempus neque. Integer lacinia aliquet vestibulum. Donec in faucibus nunc, in accumsan augue. Pellentesque sit amet sapien mauris.</p>
         </div>
         <div className = 'footer'>
             <div className ='callToAction'>   
             <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='getInvolvedBtn'>get involved</div></Link>
            <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='donateBtn' >Donate</div></Link>  
             </div> 
            <div className = 'SM'>
            <a href="https://www.facebook.com/NonProfit40/"  style={{textDecoration: 'none'}}><div className ='facebookBtn'></div></a>
             
            </div>
         </div>
      </div>
    )
  }
}
