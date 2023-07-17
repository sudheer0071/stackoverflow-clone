import React, { Fragment } from "react";

import {ReactComponent as GitHub} from "../../../assets/GitHub.svg";
import {ReactComponent as Database} from "../../../assets/Database.svg";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <div className="socials">
        <div className="social-item">
          <a
            href='https://github.com/sudheer0071/stackoverflow-clone/tree/master'
            target='_blank'
            rel="noreferrer"
          >
            <GitHub/>
          </a>
          <p><strong>Git Repo</strong></p>
        </div>
        
      </div>
    </div>
  </Fragment>
};

export default Footer;
