import React, { useState, useEffect } from 'react'
import { Heading, Layout, Blocks } from '../../components'
import styles from './Career.module.scss'

const { Career: CareerList } = Blocks

const Career = ({ career }) => {
  const [activeImageLink, setActiveImageLink] = useState('')

  useEffect(() => {
    setActiveImageLink(career[0].image)
  }, [])

  return (
    <Layout>
      <Heading level={2}>Career</Heading>
      <div className={styles.career}>
        <div className={styles.career__left}>
          <img className={styles.career__image} src={`/images/${activeImageLink}`} alt="Career image"/>
        </div>

        <div className={styles.career__right}>
          <CareerList career={career} />
        </div>
      </div>
    </Layout>
  )
}

Career.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:4200/career')
  const career = await res.json()
  return {
    career
  }
}

export default Career
