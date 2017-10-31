import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class AddBlog extends Component {
    constructor(){
        super()

        this.state={
            title: null,
            blogPost: null,
            author: null
            
        }
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBlog = this.handleBlog.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()

   var blog = {
       title: this.state.title,
       blog: this.state.blogPost,
       author: this.state.author
   }
       
        console.log(blog)
        axios.post('/api/addBlog', blog)

        this.props.history.push('/Admin/blog')
    }

    handleTitle(e){
        this.setState({title: e.target.value })
    }
    handleBlog(e)
    {
        this.setState({blogPost:e.target.value})
    }
    handleAuthor(e){
        this.setState({author: e.target.value})
    }


  render() {
      
    return (
      <div>
          
        <input className = 'title' placeholder ="title" 
        onChange={this.handleTitle}/>
        {console.log(this.state.title1)}
        <input className = 'blog' placeholder = "add blog here"
        onChange ={this.handleBlog} />
        <input className = 'author' placeholder ='author name yo'
        onChange={this.handleAuthor}/>

        <button className='btn' value = "submit" onClick={this.handleSubmit}>Submit</button>
        
      </div>
    
    )
  }
}
