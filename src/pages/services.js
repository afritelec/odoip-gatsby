import * as React from 'react'
import David from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql } from "gatsby"

// Step 2: Define your component
const Services = ({ data }) => {
  return (
    
      <David pageTitle="Services">
        <StaticImage
        alt="Fibre optique"
        src="../images/iStock_000031499760Medium.jpg"
        />
    <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>    
     
    </David>
    
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

// Step 3: Export your component
//export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>
export const Head = () => <Seo title="Services" />
export default Services