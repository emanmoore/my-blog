import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (


        <Layout>
            <h1>I'm a developer</h1>
            <p><Link to="/contact"> I'm here to help build beautiful websites.</Link></p>
        </Layout>



    )
}

export default AboutPage