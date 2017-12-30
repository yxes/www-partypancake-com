import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>PartyPancake is just a mechanism for my family to stay connected. There are some things you don't want on Facebook or Twitter and this is a place to do that. It's a scratch area that let's us develop games and toys, while discussing things of interest to us. At times it is extremely boring, punctuated by massive bouts of excitment and mayhem. Mostly, it just sits here collecting Internet dust, which is the way we like it. Drama doesn't really suit most of us.</p>
          <p>
            Though you are welcome to browse around, there's not much to see or do. One of us may let you have access to a game we developed for a time or some productivity app (<i>unlikely</i>) but there's no commerical ventures or links outside of those our family might find interesting. Welcome anyway.
          </p>
          {close}
        </article>

        <article id="links" className={`${this.props.article === 'links' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Links</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <ul>
            <li><a href="https://partypancake.slack.com/">Slack</a></li>
            <li><a href="https://mail.partypancake.com/">Email</a></li>
            <li><a href="https://drive.partypancake.com/">Google Drive</a></li>
            <li><a href="https://cal.partypancake.com/">Google Calendar</a></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>
            Development is primaryily done by Nick Messier and Steve Wells. With oversight from Skylar and Hope and input from Alex.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main