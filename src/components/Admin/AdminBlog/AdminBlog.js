import React, { Component } from 'react'
import './AdminBlog.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class AdminBlog extends Component {
  constructor(){
    super()

    this.state={
      blogs: [],
      refresh: true
    }
   this.removeBlogPost.bind(this);
  }

  componentWillMount(){
    axios.get('/api/getBlogs').then(resp => this.setState({
      blogs: resp.data
    }))
  }

removeBlogPost(id){

  var body = {
    id: id
  }
  axios.post('/api/deleteBlog', body)
  this.setState({
    refresh: !this.state.refresh
  })
  axios.get('/api/getBlogs').then(resp => this.setState({
    blogs: resp.data
  })).catch(alert("You Need To login First"));
}


  render() {
    {console.log(this.state.blogs)}
    if(this.state.blogs){
      console.log(this.state.blogs)
      var posts = this.state.blogs.map((blog, i) => {
        return(
          <div className = "blogContainer">
           
            
        <div className = 'blogTitle'>
          <button onClick={() =>this.removeBlogPost(blog.id)}>x</button>
          {blog.title}
        </div>
       
        <div className = 'blogPost'>
          
          
        
         <p className = "wordwrap">
         <img className = 'blogImage' src={blog.photo} ALIGN ='right'/>  {blog.blog}</p>
        </div>
        <div className = 'blogAuthor'>
          <h3>written by: {blog.author}</h3>
          
        </div>
        </div>
        )
      })
  }
    return (
      
      <div className = 'page'>
          <div className = "brown">
          </div>

          <Link to ={'/admin/Blog/Add'} style ={{textDecoration: 'none', color: "#552f1d"}}>
          <div className = "addNewBlog">
              + ADD NEW BLOG
          </div>
          </Link>
          <div className = 'whiteBack'>
          {posts}
          </div>
          <div className = "footer">

          </div>
      </div>
    )
  }
}
