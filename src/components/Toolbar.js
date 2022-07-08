import { InfoCircleOutlined } from '@ant-design/icons'
import React from 'react'
import logo from "../assets/logo.png"
import styles from "./style/Toolbar.module.css"

export default function Toolbar() {
    return (
        <div className={styles.parent}>
            <img src={logo} alt="logo" />
            <div className={styles.tools}>
                <InfoCircleOutlined className={styles.tool__info} />
            </div>
        </div>

    )
}
