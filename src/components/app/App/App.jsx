import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery'
import css from './App.module.css'
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

class App extends React.Component { 

  state = {
    imgName: '',
  }
  

  handleFormSubmit = imgName => { 
    this.setState({imgName})
  }

  render() { 
    

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgName={this.state.imgName} />
        <ToastContainer autoClose={3000} />
      </div>
    )
  }

}

export default App;
