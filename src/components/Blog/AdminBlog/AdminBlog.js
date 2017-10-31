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
    this.removeBlogPost = this.removeBlogPost.bind(this);
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
  }))
}


  render() {
   
    if(this.state.blogs){
      console.log(this.state.blogs)
    var posts = this.state.blogs.map((blog) => {
      return(
        <div>
          <div>
          <button onClick={() =>this.removeBlogPost(blog.id)}> x</button>
        </div>
          
      <div>
        {blog.title}
      </div>
      <div>
        {blog.blog}
      </div>
      <div>
        {blog.author}
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
          {posts}
      </div>
    )
  }
}
