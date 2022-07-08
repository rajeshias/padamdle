import React from 'react'
import styles from "./style/Layout.module.css"
import Main from './Main'

export default function Layout() {
  return (
    <div className={styles.layout}>
        <Main />
    </div>
  )
}
