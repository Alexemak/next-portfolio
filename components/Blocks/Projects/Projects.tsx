import React from 'react'
import styles from './Projects.modules.scss'

export default function Projects ({ projects = [], ...rest }) {
  return (
    <ul className={styles.projects}>
      {projects.map(project => (
        <li className={styles.projects__item}>
          <img className={styles.projects__image} src={`/images/${project.image}`} alt="Projects image"/>
          <div className={styles.projects__content}>
            <h3 className={styles.projects__title}>{project.title}</h3>
            <p className={styles.projects__description}>{project.description}</p>
            <span className={styles.projects__type}>{project.type}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
