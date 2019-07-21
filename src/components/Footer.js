import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white-ter has-text-black-ter">
        <div className="content has-text-centered has-background-white-ter has-text-black-ter">
          <div className="container has-background-white-ter has-text-black-ter">
            <div className="columns">
              <div className="column is-4 social">
                <img
                  src={logo}
                  alt="fukufuku"
                  style={{ width: '14em', height: '10em' }}
                />
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        ホーム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        合同会社ふくふくについて
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        事業内容
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        コンタクト
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
