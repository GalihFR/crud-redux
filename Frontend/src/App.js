import React, { Component } from 'react'
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateContactContainer from './containers/CreateContactContainer';
import EditContactContainer from './containers/EditContactContainer';
import TesUploadImage from './containers/ImageCreate';

export class App extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/testUpload" exact component={TesUploadImage}/>
          <Route path="/create" exact component={CreateContactContainer}/>
          <Route path="/edit/:id" exact component={EditContactContainer}/>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
