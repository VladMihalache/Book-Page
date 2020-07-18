import React, { Component } from 'react'
import style from "../componentStyles/HeaderStyle.module.css"

export class Header extends Component {
    render() {
        return (
        <div>
            <div className={style.header}>
                <div className={style.headerSideLeft}>
                    <h1>Lectură</h1>
                </div>
                <div className={style.headerCenter}>
                    <h1>De-a ce mă joc</h1>
                </div>
                <div className={style.headerSideRight}>
                    <h1>Unitatea II</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Header
