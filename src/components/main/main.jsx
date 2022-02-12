import React,{Component} from 'react';
import PhotoWall from './photoWall/photoWall.jsx';

class Main extends Component {
  constructor() {
    super();
    this.state =  {
      photos : [
        {
          img_url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          description:"first",
          id:1,
          liked:0,
          disliked:0
        },
        {
          img_url: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg",
          description: "second",
          id:2,
          liked:0,
          disliked:0
        },
        {
          img_url:"https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
          description:"third",
          id:3,
          liked:0,
          disliked:0
        },
        {
          img_url:"https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
          description:"fourth",
          id:4,
          liked:0,
          disliked:0
        },
        {
          img_url:"https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          description:"fifth",
          id:5,
          liked:0,
          disliked:0
        }
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }
  removePhoto(photoToBeRemoved) {
    this.setState ( (state)=>({
      photos : state.photos.filter(
        photo => photo !== photoToBeRemoved
      )
    }) );
  }
  like(photoToBeLiked){
    this.setState ( (state)=>({
      photos : state.photos.map(
        photo => {
          if (photo === photoToBeLiked) {
            photo.liked = photo.liked+1;
          }
          return photo;
        }
      )
    }) );
  }
  dislike(photoToBeDisliked){
    this.setState ( (state)=>({
      photos : state.photos.filter(
         photo => {
          if (photo === photoToBeDisliked) {
            photo.disliked = photo.disliked+1;
          }
          return photo;
        }
      )
    }) );
  }
  render() {
    return (
      <main className="main container">
      <PhotoWall photos={this.state.photos}
        removePhoto={this.removePhoto}
        like={this.like}
        dislike={this.dislike}
       />
      </main>
    )
  }
}

export default Main;