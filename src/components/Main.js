import React from 'react'
import Screen from './Screen'
import styles from "./style/Main.module.css"
import Toolbar from './Toolbar'

export default function Main() {
  return (
    <div className={styles.main}>
        <Toolbar />
        <Screen />
    </div>
  )
}
