import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom'
import Carousel from './Carousel'
export default class LandingPage extends Component {
  render() {
    return (
        //div+div>div*6^div>div*2^div>div>div*3^div^div>div>div^div*2^div>div*6
      <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
             <div><Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#552f1d"}}>Why us </Link></div>
             <div><Link to ={'/MoreWays'} style ={{textDecoration: 'none', color: "#552f1d"}}>More Ways To Help</Link></div>
             <div><Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}>Donate</Link></div>
             <div><Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get involved</Link></div>
             <div><Link to ={'/Resources'} style ={{textDecoration: 'none', color: "#552f1d"}}>Resources</Link></div>
             <div><Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
         </div>
         <div className = "imgscroller">
             <div><Carousel /></div>
             
         </div>
         <div>
             <div>about</div>
             <div>Icon for my non profit</div>
         </div>
         <div className = "news/image">
             <div className = "email">
                 <div>text bubble</div>
                 <div> call to sign up</div>
                 <div> input</div>
                 <button>
                     submit
                 </button>
             </div>
             <div className = "mission"></div>
         </div>
         <div>
             <div className = "Photo">
                 <div>Photo</div>
             </div>
             <div>Map Photo</div>
             <div>story about founder</div>
         </div>
         <div>
             <div>get involved</div>
             <div>Donate</div>
             <div>Store</div>
             <div>facebook</div>
             <div>insta</div>
             <div>twitter</div>
         </div>
        {/* <a href= { process.env.REACT_APP_LOGIN }><button type='button' className = 'loginButton' >LOGIN </button></a> */}
      </div>
    )
  }
}
