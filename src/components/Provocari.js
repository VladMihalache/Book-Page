import React, { Component } from 'react'
import style from "../componentStyles/ProvocariStyle.module.css"

export class Provocari extends Component {
    render() {
        return (
            <div className={style.section}>
                <div className={style.sectionName}>
                    <h3>Provocări</h3>
                </div>
                <div className={style.exerciseSection}>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <h4>Lucrați în grupe de câte 4 – 5 elevi. Schițați o bandă desenată în care să surprindeți cele mai importante secvențe ale schiței Vizită….</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Provocari
