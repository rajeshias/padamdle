import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react'
import styles from './style/Screen.module.css'
import Enter from './Enter';

export default function Screen() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.guess__card}>
            <div className={styles.guess__pic}><img src="https://f004.backblazeb2.com/file/padamdle/Rasikkum+Seemanae.png" alt="se" /></div>
            <Tabs className={styles.guess__tabs} value={value} onChange={handleChange} centered>
                <Tab label="1" />
            </Tabs>
            <br />
            <Enter centered/>
        </div>
    )
}
