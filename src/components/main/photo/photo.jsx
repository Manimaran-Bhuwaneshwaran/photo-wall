import React,{Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import './photo.css';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <div className="image" >
            <img
              src = {this.props.photo.img_url} 
              alt = {this.props.photo.description} />
        </div>
        <div className ="content" >
          <p> {this.props.photo.description} </p>
        </div>
        <div className ="button">
        <span>
          <span>{this.props.photo.liked}</span>
          <button onClick={()=>{
            this.props.like(this.props.photo);
          }} className="btn"><Icon.HandThumbsUp className="content-primary"/></button>
        </span>
        <span>
          <span>{this.props.photo.disliked}</span>
          <button onClick={()=>{
            this.props.dislike(this.props.photo);
          }} className="btn"><Icon.HandThumbsDown className="content-primary"/></button>
        </span>
        </div>
      </div>
    )
  }
}

export default Photo;