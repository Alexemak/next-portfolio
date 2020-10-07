import React from 'react'
import Head from 'next/head'
import { Heading, Layout, Button, Blocks } from '../../components'

const { Projects } = Blocks

const Portfolio = ({ projects }) => {
  return (
    <Layout>
      <Heading level={2}>Portfolio</Heading>
      <Projects projects={projects} />
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
