import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Pages = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}
export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        
      }
    }
  }
`

//export const Head = () => <Seo title="Super Cool Blog Posts" />
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Pages