import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor()
    {
        super();

        this.state = ({
            
            showHeader: false,
            animate: true
        })
    }

    timeOut(){
        this.setState({
            animate: true
        })

     setTimeout( () => { 

         this.setState({
         animate: false
         })
     }, 10000)
    }

    show(){
        this.setState({showHeader: !this.state.showHeader})
    }

  render() {
    return (
      <div className = "spanthis">
        <div id="menu-toggle" onClick = { () => {this.timeOut(); this.show(); }}  >
                <div id={ !this.state.showHeader ? "hamburger" : "invisible"}>
                    <span className = "span"></span>
                    <span className = "span"></span>
                    <span className = "span"></span>
                    </div>
                    
                <div id={ this.state.showHeader ? "cross" : "invisible"}>
                    <span className = "span"></span>
                    <span className = "span"></span>
                </div>
                </div>
             <div className = {this.state.showHeader ? "drop-down-header":  'invisible'}>
         <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#ffff"}}>  <div className = 'drop-down'>  Why us</div></Link>
         <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'drop-down'>Get involved</div></Link>
             <Link to ={'/'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className ='drop-down'>Home </div></Link>
             <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className = 'drop-down'>Blog</div></Link>
             <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'drop-down' >Donate</div></Link>
            </div>
      </div>
    )
  }
}
