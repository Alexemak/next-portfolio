import React from 'react'
import { Heading, Layout } from '../../components'

const Portfolio = ({ projects }) => {
  return (
    <Layout>
      <Heading level={2}>Portfolio</Heading>
    </Layout>
  )
}

Portfolio.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:4200/projects')
  const projects = await res.json()
  return {
    projects
  }
}

export default Portfolio
