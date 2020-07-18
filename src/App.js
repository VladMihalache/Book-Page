import React, { Component } from 'react'
import  styles from './App.module.css';
import Explorare from './components/Explorare'
import Header from './components/Header'

export class App extends Component {
  render(){
    return (
      <div className={styles.app}>
        <Header />
        <Explorare />
      </div>
    )
  }
}

export default App;
