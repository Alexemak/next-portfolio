import React from 'react'
import styles from './Career.module.scss'

export default function Career ({ career = [], ...rest }) {

  return (
    <ul className={styles.career} {...rest}>
      {career.map(item => (
        <li className={styles.career__item} key={item.id}>
          <div className={styles.career__period}>
            <div className={styles.career__time}>{item.period}</div>
            <div className={styles.career__dot} />
          </div>
          <div className={styles.career__content}>
            <h3 className={styles.career__title}>{item.title}</h3>
            <div className={styles.career__description}>{item.description}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
