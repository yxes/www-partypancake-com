import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
          Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a
          href="https://www.gatsbyjs.org/">Gatsby.js</a>
          <br/>
          &copy; { new Date().getFullYear() } PartyPancake
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
