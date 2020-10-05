import React from 'react'

import { Nav } from '../'
import styles from './Layout.module.scss'

export default function Layout ({ children }) {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <Nav />
      </aside>
      <section className={styles.section}>{children}</section>
    </main>
  )
}
