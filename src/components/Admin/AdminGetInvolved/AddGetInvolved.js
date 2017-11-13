import React, { Component } from 'react'
import axios from 'axios'
import Dropzone  from 'react-dropzone'
import img from '../../logo/logo.jpg'
import './AddGetInvolved.css'
export default class AddGetInvolved extends Component {
  constructor(){
    super()

    this.state={
      title: null,
      details: null,
      link: null,
      overseas: false,
      imageURL: ''
    }
    this.handleLink = this.handleLink.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    console.log('here')
   axios.get('/auth/me').then(res => console.log(res.data)).catch( () => {
     this.props.history.push('/401')
   });
  } 


      handleTitle(e){
        this.setState({title: e.target.value })
    }
    handleDetails(e)
    {
        this.setState({details:e.target.value})
    }
    handleLink(e){
        this.setState({link: e.target.value})
    }
    handleCheck(){
      this.setState({overseas: !this.state.overseas})
    }

    handleSubmit(e){
      e.preventDefault()

 var volunteer = {
     title: this.state.title,
     details: this.state.details,
     link: this.state.link,
     overseas: this.state.overseas,
     image: this.state.imageURL
 }
     
      console.log(volunteer)
      axios.post('/api/addVolunteer', volunteer);

      this.props.history.push('/Admin/getinvolved')
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

  render(){


    return(

<div className = "page" id = "filler2">
<div className = 'vWrapper'>
    <div className = 'container'>
    
    <div className = 'vContainer' >
   
      <div  id = 'vATitle'><input type="text" placeholder='title' onChange={this.handleTitle}/></div>
      <div className = 'vDetails'><textarea type="text" placeholder='descripition' onChange={this.handleDetails}/></div>
      <div ><input type="text" placeholder ='hyperlink' onChange={this.handleLink}/></div>
      <div>  <input type="checkbox" placeholder = 'overseas?' defaultChecked={this.state.overseas} onChange={this.handleCheck}/> overseas?</div>
    </div>

    <div className = 'imageWrapper'>
    <div className = 'roundImage'> <Dropzone className = 'dropzone'
          onDrop = {this.handleDrop}
          multiple
          accept='image/*'
          
          >
          <p>drag and drop photos</p> 
          </Dropzone></div>
      </div>
      <button className='button' value = "submit" onClick={this.handleSubmit}>Submit</button>
      </div></div>
      </div>



      
    )
  }
    
}
