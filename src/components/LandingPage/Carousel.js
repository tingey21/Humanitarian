import React, { Component } from 'react'
import {Carousel, showArrows, onChange, onClickItem, showThumbs} from 'react-responsive-carousel'
import './Carousel.css'
export default class componentName extends Component {
  render() {
    return (
        
        <Carousel showThumbs={false} showArrows={true} showStatus={false} onChange={onChange} onClickItem={onClickItem}>
                <div>
                    <img src="http://andykristian.com/wp-content/uploads/2011/06/15.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://andykristian.com/wp-content/uploads/2011/06/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.freeburmarangers.org/wp-content/uploads/2017/06/IMG_5883.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.tyhfoundation.org/wp-content/gallery/impact-gallery/boys.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
               
</Carousel>
    )
  }
}
