import React, { Component } from 'react'
import style from "../componentStyles/AplicatiiStyle.module.css"

export class Aplicatii extends Component {
    render() {
        return (
            <div className={style.section}>
                <div className={style.sectionName}>
                    <h3>Aplicații</h3>
                </div>
                <div className={style.exerciseSection}>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <h4><span>2.</span> Evaluează planul dezvoltat al colegului/colegei de bancă, pe baza următoarelor criterii:</h4>
                        </div>
                        <div className={style.exerciseBodyTwo}>
                            <div className={`${style.tableRow} ${style.first}`}>
                                <p className={`${style.criterii} ${style.first}`}>Criterii</p>
                                <p className={`${style.answer} ${style.first}`}>Da</p>
                                <p className={`${style.answer} ${style.first}`}>Nu</p>
                            </div>
                            <div className={style.tableRow}>
                                <p className={style.criterii}>A fost dezvoltată fiecare idee principală, adăugându-se detalii relevante.</p>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="first"></input>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="first"></input>
                            </div>
                            <div className={style.tableRow}>
                                <p className={style.criterii}>A fost respectată ordinea în care apar în text ideile principale și secundare.</p>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="second"></input>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="second"></input>
                            </div>
                            <div className={style.tableRow}>
                                <p className={style.criterii}>Exprimarea este clară și corectă, fără greșeli gramaticale, de ortografie sau de punctuație.</p>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="third"></input>
                                <input className={`${style.answer} ${style.checkbox}`} type="radio" name="third"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aplicatii
