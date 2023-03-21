// Step 1: Import React
import * as React from 'react'
import David from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const About = () => {
  return (
    
      <David pageTitle="A propos">
        <StaticImage
        alt="Fibre optique"
        src="../images/fibre-1.jpg"
        />
      <p>A propos Tutorial.</p>
    </David>
    
  )
}

// Step 3: Export your component
export const Head = () => <Seo title="About Me" />
export default About