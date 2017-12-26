import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Blog.css'
import logo from '../logo/logo.png'
import Header from '../LandingPage/header'
export default class Blog extends Component {
  constructor(){
    super()

    this.state={
      blogs: [],
      refresh: true,
      timeout: false
    }
    
  }

  componentDidMount(){
    
    axios.get('/api/getBlogs').then(resp => this.setState({
      blogs: resp.data
    })).catch( () => {window.location.reload()})
  }

  loading(){
    
    setTimeout( () =>{
     
      this.setState({
        timeout: true
      })

    }, 1500)
  }

  render() {

    if(!this.state.timeout){
      this.loading();
      return(
      
        <div className = "load-me">
          <div class="loader">
            <div class="one"></div>
            <div class="two"></div>
          </div>
    
</div> 
      )
    }
   
    if(this.state.blogs){
    var posts = this.state.blogs.map((blog, i) => {
      return(
        <div className = "blogContainer" key = {i}>
           
            
        <div className = 'blogTitle'>
          
          {blog.title}
        </div>
       
        <div className = 'blogPost'>
          
          
        
         <p className = "wordwrap">
         <img className = 'blogImage' src={blog.photo} alt = " blog"align ='right'/>  {blog.blog}</p>
        </div>
        <div className = 'blogAuthor'>
          <h3>written by: {blog.author}</h3>
          
        </div>
        </div>
      )
    })
  } else{
    this.loading();
    return(
      <div className = "load-me">
          <div class="loader">
            <div class="one"></div>
            <div class="two"></div>
          </div>
    
</div> 
    )
  }
    return (
      <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#FFFF"}}>  <div className = 'headerLink'>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink'>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className = 'headerLink'><div className = 'arrow'></div>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink' >Donate</div></Link>
         
        
     </div>

     <div className = "hamburger">
             
             <Header />
         </div>

     <div className = 'whiteBack'>
       <div>
     {posts}
     </div>
          
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

