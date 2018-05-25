import React, { Component } from 'react';
import styled from 'styled-components'
import profile from '../assets/images/Profile-closeup-02-480-optimize.jpg'
import placeholder from '../assets/images/profile-placeholder.jpg'

// Component inspired in blurred image placeholders used
// in Medium
class ProfileImg extends Component {
  constructor() {
    super();
    this.state = {
      loadedClass: '',
      photoUrl: placeholder
    }
  }

  // Request for the profile photo through a promise to wait
  // with the blurred placeholder till the body (blob) of the
  // image file is loaded, then just render the loaded image
  // and applies a class that removes the blur filter of the photo
  componentDidMount() {
    process.env.NODE_ENV !== 'test' && fetch(profile)
      .then(response => response.blob())
      .then(imgBlob => {
        const photoUrl = URL.createObjectURL(imgBlob);
        this.setState({
          photoUrl,
          loadedClass: 'loaded'
        })
      })
  }

  render() {
    return <RenderPhoto
      photoUrl={this.state.photoUrl}
      loadedClass={this.state.loadedClass}
    />
  }
}

const RenderPhoto = styled(({
  className,
  photoUrl,
  loadedClass
}) => (
  <div className={className}>
    <img
      src={photoUrl}
      className={loadedClass + ' photo img-responsive'}
      alt='@imjarois'
    />
    <div className='safety-tall'></div>
  </div>
))`
  background: var(--primary-color) no-repeat;
  background-size: cover;

  position: relative;
  width: 160px;
  border: solid 1px var(--accent-color);
  border-radius: 150px;
  overflow: hidden;

  .safety-tall {
    padding-bottom: 100%;
  }

  .photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    filter: blur(10px);
    transform: scale(1);
    transition: filter 1s linear;
  }

  .loaded {
    filter: none;
  }
`

export default ProfileImg;
