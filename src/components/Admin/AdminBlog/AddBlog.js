import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Dropzone  from 'react-dropzone'
import './AddBlog.css'
export default class AddBlog extends Component {
    constructor(){
        super()

        this.state={
            title: null,
            blogPost: null,
            author: null,
            imageURL: ''
            
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
       author: this.state.author,
       imageUrl: this.state.imageURL
   }
       
        console.log(blog)
        axios.post('/api/addBlog', blog).catch(alert("You Need To login First"));

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


    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);
          formData.append("tags", `codeinfuse, medium, gist`);
          formData.append("upload_preset", "icref0s2"); // Replace the preset name with your own
          formData.append("api_key", "437898983782445"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
         // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return axios.post("https://api.cloudinary.com/v1_1/dmiaaf97j/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url 
            this.setState({imageURL: data.url})
            console.log(data);
    
          })
        });
      
       // Once all the files are uploaded
        axios.all(uploaders).then(() => {
          // ... perform after upload is successful operation
        });
      }

  render() {
      
    return (
      
      <div className = "page" id = 'filler'>
      
          <div className = 'whiteBack'>
       <div className = 'aTitleWrapper'> <input className = 'aTitle' placeholder ="title"     
        onChange={this.handleTitle}/> </div>
        <div>
        <Dropzone className = 'dropzone'
          onDrop = {this.handleDrop}
          multiple
          accept='image/*'
          
          >
          <p>drag and drop photos</p> 
          </Dropzone></div>
          
        <div className = 'blogImage'><img src={this.state.imageURL} alt=""/></div>
        <div className = 'aBlogWrapper'> <textarea className = 'aBlog' placeholder = "Add blog here"
        onChange ={this.handleBlog} />  </div>
        <div className = ''><input className = 'aAuthor' placeholder ='Add author name'
        onChange={this.handleAuthor}/> </div>
       
          <div> <button className='btn' value = "submit" onClick={this.handleSubmit}>Submit</button></div>
          <div className = 'filler'>
            
          </div>
          </div>
          
      </div>
    
    )
  }
}
