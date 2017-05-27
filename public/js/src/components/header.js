"use strict"

import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div>
            <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Sistema XPTO</span>
                <div className="mdl-layout-spacer"></div>
              </div>
            </header>
          </div>
        );
    }

}

export default Header;
