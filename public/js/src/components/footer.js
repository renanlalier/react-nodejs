"use strict"

import React, {Component} from 'react';
import styles from './footer.css';

class Footer extends Component {

  constructor(props){
      super(props);
  }

  render(){
      return(
        <div className={styles.marginFooter}>
          <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__left-section">
              <div className="mdl-logo">Sistema XPTO</div>
              <ul className="mdl-mini-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
              </ul>
            </div>
          </footer>
        </div>
      );
  }

}

export default Footer;
