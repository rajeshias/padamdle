import React from 'react'
import styles from "./style/Main.module.css"
import Toolbar from './Toolbar'

export default function Main() {
  return (
    <div className={styles.main}>
        <Toolbar />
    </div>
  )
}
