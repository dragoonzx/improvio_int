import React from 'react'
import { Link } from 'gatsby'
import pic1 from '../images/3.png'

import Layout from '../components/layout'

export default class BlogPage extends React.Component{
    
    render(){
        return (<Layout>
            <div className="logo" style={ {'border-radius': '10', padding: '0'} }>
        <span className=""><img src={pic1} style={ {width:'15%', height:'15%', margin: 'auto', border: '1px solid'} }></img></span>
        </div>
        <h1>Blog page</h1>
        <h2>Welcome from Improvi-O team</h2>
        <ul>
      <nav>
    <Link to="/">Go back to the homepage</Link></nav>
    <nav><Link to="/work">Go to the work page</Link></nav>
    </ul>
        </Layout>)
    }
}

