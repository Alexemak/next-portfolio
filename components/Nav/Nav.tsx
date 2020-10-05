import React from 'react'
import cs from 'classNames'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { routes } from './routes'
import styles from './Nav.module.scss'

export default function Nav () {
  const { pathname } = useRouter()

  return (
    <ul className={styles.nav}>
      {routes.map(route => (
        <li key={route.path} className={styles.nav__item}>
          <Link href={route.path}>
            <a className={cs(styles.nav__link, pathname === route.path && styles.nav__link_active)}>{route.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
