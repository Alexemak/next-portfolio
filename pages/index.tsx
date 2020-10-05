import React from 'react'
import { Button, Heading, Layout } from '../components'

const IndexPage = () => (
  <Layout>
    <Button variant='danger' onClick={() => console.log('click')}>
      A styled button
    </Button>
    <Heading level={2}>123</Heading>
  </Layout>
)

export default IndexPage
