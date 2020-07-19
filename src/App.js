import React, { Component } from 'react'
import  styles from './App.module.css';
import Header from './components/Header'
import Explorare from './components/Explorare'
import Repere from './components/Repere'
import Aplicatii from './components/Aplicatii'
import Provocari from './components/Provocari'


export class App extends Component {
  render(){
    return (
      <div className={styles.app}>
        <Header />
        <Explorare />
        <Repere />
        <Aplicatii />
        <Provocari />
      </div>
    )
  }
}

export default App;
