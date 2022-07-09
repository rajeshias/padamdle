import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useEffect, useState } from 'react'
import styles from './style/Screen.module.css'
import Enter from './Enter';
import today from '../assets/db/images/july';

export default function Screen() {
    const [value, setValue] = useState(0);
    const [tries, setTries] = useState([]);

    useEffect(() => {
        let setImageIndex = 0;
        if (tries.length > 2) {
            setImageIndex = 2;
        } else {
            setImageIndex = tries.length
        }
        setValue(setImageIndex)
    }, [tries])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles.guess__card}>
            <div className={styles.guess__pic}><img src={today[value]} /></div>
            <Tabs className={styles.guess__tabs} value={value} onChange={handleChange} centered>
                <Tab label="1" />
                {tries.length > 0 && <Tab label="2" />}
                {tries.length > 1 && <Tab label="3" />}
            </Tabs>
            <br />
            <Enter centered tries={tries} setTries={setTries} />
        </div>
    )
}
