import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom'
import Carousel from './Carousel'
import axios from 'axios'
export default class LandingPage extends Component {
    constructor()
    {
        super();

        this.state = ({
            email: 'a',
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    handleSubmit(){
        var emailToUse = {
            email: this.state.email
        }
        var arr =emailToUse.email.split('@');
            
        
    axios.get(`https://api.mailtest.in/v1/${arr[1]}`).then((resp) =>{ console.log(resp.data.status)
        if(resp.data.status == 'ACTIVE'){
            axios.post('/api/addEmail', emailToUse)
        }
        else{
            console.log('type in a real domain stupid idiot')
        }
})

    }

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
                 <div> input</div>
                 <div> <input type="text" placeholder='email' onChange ={this.handleChange}/>
                 {console.log(this.state.email)}</div>
                 <button onClick = {this.handleSubmit}>
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
