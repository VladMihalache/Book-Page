import React, { Component } from 'react'
import style from "../componentStyles/ExplorareStyle.module.css"

export class Explorare extends Component {
    render() {
        return (
            <div className={style.section}>
                <div className={style.sectionName}>
                    <h3>Explorare</h3>
                </div>
                <div className={style.exerciseSection}>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <h4><span className={style.nr}>1.</span>Grupează ideile din rubrica Explorare (pagina 49) într-un plan simplu, urmărind sugestiile din tabel.</h4>
                        </div>
                        <div className={style.exerciseBody}>
                            <div className={style.pair}>
                                <p className={style.step}>Precizează cum începe acțiunea.<br></br>(Cine? Ce face? Unde? Când?)</p>
                                <textarea></textarea>
                            </div>
                            <div className={style.pair}>
                                <div className={style.step}>
                                    <p>Prezintă ce se întâmplă:</p>
                                    <ul>
                                        <li><span></span><p>cum se declanșează acțiunea;</p></li>
                                        <li><span></span><p>cum se desfășoară acțiunea;</p></li>
                                        <li><span></span><p>cum sunt depășite complicațiile</p></li>
                                    </ul>
                                </div>
                                <textarea></textarea>
                            </div>
                            <div className={style.pair}>
                                <p className={style.stepTwo}>Notează finalul întâmplării.</p>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <h4><span className={style.nr}>2.</span>Formulează o idee care să completeze, prin detalii, prima idee principală de la exercițiul anterior.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Explorare
