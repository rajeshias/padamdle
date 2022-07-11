import { InfoCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import styles from "./style/Toolbar.module.css"
import InfoModal from "./InfoModal"
import moment from 'moment';
import { Typography } from '@mui/material'


var days = moment().diff("2022-07-09", "days");
const no = `#${days}`
export default function Toolbar() {
    const [result, setResult] = useState(false);
    const handleClose = () => setResult(false);
    return (
        <div className={styles.parent}>
            <img src={logo} alt="logo" />
            <span className={styles.no}>{no}</span>
            <div className={styles.tools}>
                <InfoCircleOutlined className={styles.tool__info} onClick={() => setResult(true)} />
            </div>
            <InfoModal open={result} handleClose={handleClose} />
        </div>
    )
}
