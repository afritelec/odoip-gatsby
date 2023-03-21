import * as React from 'react'
import David from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <David pageTitle="Home Page">
      <StaticImage
        alt="Fibre optique"
        src="../images/iStock_000031395242Medium.jpg"
        />
        <p>I'm making this by following the Gatsby Tutorial.</p>
    </David>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage