import * as React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'


// Step 2: Define your component
const Services = ({ data }) => {
  return (
    
      <Layout pageTitle="Services">
        <StaticImage
        alt="Fibre optique"
        src="../../images/iStock_000031499760Medium.jpg"
        />
    <ul>
      {
        data.allMdx.nodes.map(node => (
            <article key={node.id}>
               <h2>
              <Link to={`/services/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            </article>
         
        
        ))
      }
      </ul>    
     
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
  `
// Step 3: Export your component
//export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>
export const Head = () => <Seo title="Services" />
export default Services