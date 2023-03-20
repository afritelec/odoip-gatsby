import * as React from 'react'
import David from '../components/layout'

const IndexPage = () => {
  return (
    <David pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </David>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage