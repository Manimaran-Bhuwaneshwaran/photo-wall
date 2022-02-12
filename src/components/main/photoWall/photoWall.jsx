import React,{Component} from 'react';
import Photo from '../photo/photo.jsx';
import './photoWall.css';

class PhotoWall extends Component {
  render() {
    return (
      <div className="photo-group">
        { this.props.photos.map((photo,index)=>
          <Photo photo={photo} key = {index} 
          removePhoto={this.props.removePhoto}
          like={this.props.like}
          dislike={this.props.dislike}
           />
        ) }
      </div>
    )
  }
}

export default PhotoWall;