import React, {Component} from 'react';
import {render} from 'react-dom';

class CatalogBooks extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const books = this.props.data.map((books)=>
      <li key={books._id} className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-avatar">import_contacts</i>
          <span>{books.title}</span>
          <span className="mdl-list__item-text-body">
            {books.description}
          </span>
        </span>
        <span className="mdl-list__item-secondary-content">
          <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
        </span>
      </li>
    );
    return(
      <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>
        <ul className="demo-list-two mdl-list">
          {books}
        </ul>
        <div className="mdl-layout-spacer"></div>
      </div>
    );
  }

}

export default CatalogBooks;
