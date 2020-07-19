import React, { Component } from 'react'
import style from "../componentStyles/RepereStyle.module.css"


export class Repere extends Component {
    render() {
        return (
            <div className={style.section}>
                <div className={style.sectionName}>
                    <h3>Repere</h3>
                </div>
                <div className={style.exerciseSection}>
                    <div className={style.exercise}>
                        <div className={style.exerciseTask}>
                            <h4><span className={style.orange}>Ideile secundare.</span> prezintă amănunte legate de ideea principală, completând-o.</h4>
                        </div>
                        <div className={style.exerciseTask}>
                            <h4><span className={style.orange}>Planul dezvoltat de idei</span> cuprinde ideile principale și ideile secundare corespunzătoare acestora, în ordinea în care apar în text.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repere
