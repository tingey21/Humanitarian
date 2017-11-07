import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './WhyUs.css'
export default class WhyUs extends Component {
  render() {
    return (
      <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
             
             <div><Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#af765c"}}>Why us </Link></div>
             <div><Link to ={'/MoreWays'} style ={{textDecoration: 'none', color: "#552f1d"}}>More Ways To Help</Link></div>
             <div><Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}>Donate</Link></div>
             <div><Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get involved</Link></div>
             <div><Link to ={'/Resources'} style ={{textDecoration: 'none', color: "#552f1d"}}>Resources</Link></div>
             <div><Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
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
            <a href="https://www.facebook.com/NonProfit40/"><div className ='facebookBtn'></div></a>
             
            </div>
         </div>
      </div>
    )
  }
}
