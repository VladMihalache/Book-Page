import React, { Component } from 'react'
import  styles from './App.module.css';
import Explorare from './components/Explorare'

export class App extends Component {
  render(){
    return (
      <div className={styles.app}>
        <Explorare />
      </div>
    )
  }
}

export default App;
