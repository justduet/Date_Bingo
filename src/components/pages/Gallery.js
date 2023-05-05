import React from 'react';
import '../../App.css';
import CloudImg from '../cloud-background.png'
import { useState } from 'react';
import ProgressBar from '../ProgressBar';
import ImageGrid from '../ImageGrid';


function Gallery() {
  const [file,setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError("Please select an image file (png or jpeg)");
      }
  }

  return (
    <div className="photos-container">
      <img className="cloud-background" src={CloudImg} alt="clouds"/>
      <div className="text-overlay2">
        <h1>My Gallery</h1>
      </div>
      <form className="form-1">
        <label className="circle">
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div>}
          { file && <ProgressBar file={file} setFile={setFile}/> }
        </div>
      </form>
      <div className="image-grid-container">
        <ImageGrid />
      </div>
    </div>
  );
}

export default Gallery;
