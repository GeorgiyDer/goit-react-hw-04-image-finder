import { useState } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery'
import css from './App.module.css'
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

export const App = () => { 

  const [imgName, setImgName] = useState('')
  

  const handleFormSubmit = imgName => { 
    setImgName(imgName)
  }

    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery imgName={imgName} />
        <ToastContainer autoClose={3000} />
      </div>
    )
}

