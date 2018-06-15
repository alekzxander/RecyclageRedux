import React, { Component } from 'react'
import Main from './main';
import Header from '../component/header';
import Footer from '../component/footer';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

