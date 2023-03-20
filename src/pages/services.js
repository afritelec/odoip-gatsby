import * as React from 'react'
import David from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const Services = () => {
  return (
    
      <David pageTitle="Services">
        <StaticImage
        alt="Fibre optique"
        src="../images/iStock_000031499760Medium.jpg"
        />
      <p>A propos services.</p>
    </David>
    
  )
}

// Step 3: Export your component
export const Head = () => (

    <>
    <title>Services</title>
    <meta name="description" content="Your description" />
    </>
    )

export default Services