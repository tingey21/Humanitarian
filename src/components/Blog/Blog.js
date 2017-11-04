import React, { Component } from 'react';
import axios from "axios";
export default class Blog extends Component {
  constructor(){
    super()

    this.state={
      blogs: [],
      refresh: true
    }
    
  }

  componentWillMount(){
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
  } else{
    return(
      <div>Loading..</div>
    )
  }
    return (
      <div className = 'page'>
          <div className = "brown">
          </div>
          
          {posts}
      </div>
    )
  }
}

