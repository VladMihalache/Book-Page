import React, { Component } from 'react'
import style from "../componentStyles/explorareStyle.module.css"

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
                            <span className={style.nr}>1.</span>
                            <p>Grupează ideile din rubrica Explorare (pagina 49) într-un plan simplu, urmărind sugestiile din tabel.</p>
                        </div>
                        <div className={style.exerciseBody}>
                            <div className={style.pair}>
                                <p>Precizează cum începe acțiunea.(Cine? Ce face? Unde? Când?)</p>
                                <input type="textarea"/>
                            </div>
                            <div className={style.pair}>
                                <p>Prezintă ce se întâmplă:</p>
                                <ul>
                                    <li>cum se declanșează acțiunea;</li>
                                    <li>cum se desfășoară acțiunea;</li>
                                    <li>cum sunt depășite complicațiile</li>
                                </ul>
                                <input type="textarea"/>
                            </div>
                            <div className={style.pair}>
                                <p>Notează finalul întâmplării.</p>
                                <input type="textarea"/>
                            </div>
                        </div>
                    </div>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <span className={style.nr}>2.</span>
                            <p>Formulează o idee care să completeze, prin detalii, prima idee principală de la exercițiul anterior.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Explorare
