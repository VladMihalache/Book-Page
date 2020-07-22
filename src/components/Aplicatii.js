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
                            <h4><span>1.</span> Alcătuiește planul dezvoltat de idei, adăugând detalii pentru fiecare idee principală din planul simplu.</h4>
                        </div>
                        <div className={style.exerciseBodyOne}>
                            <div className={style.pair}>
                                <div className={`${style.leftSide} ${style.firstPair}`}>
                                    <div className={style.topLeft}>
                                        <h4>Planul simplu de idei</h4>
                                    </div>
                                    <div className={style.mainBoxes}>
                                        <h4 className={style.orangeBox}>Situația inițială</h4>
                                        <p className={style.blueBox}><span>Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei.</span></p>
                                    </div>
                                </div>
                                <div className={`${style.rightSide} ${style.firstPair}`}>
                                    <div className={style.topRight}>
                                        <h4>Planul dezvoltat de idei</h4>
                                    </div>
                                    <div className={style.mainBoxes}>
                                        <p className={style.blueBox}><span>Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei.</span> Musafirul îi oferă lui Ionel o minge și începe să discute cu gazda.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.pair}>
                                <div className={style.leftSide}>
                                    <div className={style.mainBoxes}>
                                        <h4 className={style.orangeBox}>Succesiunea de întâmplări</h4>
                                        <textarea className={style.blueBox}></textarea>
                                    </div>
                                </div>
                                <div className={style.rightSide}>
                                    <div className={style.mainBoxes}>
                                        <textarea className={style.blueBox}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className={style.pair}>
                                <div className={style.leftSide}>
                                    <div className={style.mainBoxes}>
                                        <h4 className={style.orangeBoxLast}>Situația finală</h4>
                                        <textarea className={style.blueBox}></textarea>
                                    </div>
                                </div>
                                <div className={style.rightSide}>
                                    <div className={style.mainBoxes}>
                                        <textarea className={style.blueBox}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
