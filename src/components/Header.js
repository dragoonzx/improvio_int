import React from 'react'
import PropTypes from 'prop-types'
import pic1 from '../images/3.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" style={ {'border-radius': '0', padding: '0'} }>
            <span className=""><img src={pic1} style={ {width:'100%', height:'100%', margin: '0'} }></img></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Improvi-O</h1>
                <p>We are building great sites <br />
                and improving your business by special KPI`s. </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
