"use strict"
import React, {Component} from 'react';
import {render} from 'react-dom';
import { createHashHistory } from 'history'

import ApiService from './apiService';
import CatalogBooks from './catalog-books';
import Header from './header';
import Footer from './footer';

import styles from './register-book.css';

class RegisterBook extends Component {

  constructor(props){
    super(props);
    this.saved = this.saved.bind(this);
    this.search = this.search.bind(this);
    this.clear = this.clear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.api = new ApiService();

    this.state = {
      books:[],
      title: '',
      description:''
    }
  }

  clear(){
    this.refs.title.value = '';
    this.refs.description.value = '';
    this.setState({title:''});
  }

  componentDidMount(){
    componentHandler.upgradeDom();
  }

  componentDidUpdate(){
    componentHandler.upgradeDom();
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <div>
        <Header />
          <div className={styles.marginHeader}>
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <div className="mdl-layout-spacer"></div>
              <input className="mdl-textfield__input" type="text" id="title" ref="title" name="title" onChange={this.handleChange}/>
              <label className="mdl-textfield__label" htmlFor="title">Título</label>
              <div className="mdl-layout-spacer"></div>
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>

          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="description" ref="description" name="description" />
              <label className="mdl-textfield__label" htmlFor="description">Sinopse</label>
            </div>
            <div className="mdl-layout-spacer"></div>
          </div>

          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.saved} disabled={!this.state.title}>
              Salvar
            </button>
            <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.search}>
              Pesquisar
            </button>
            <div className="mdl-layout-spacer"></div>
          </div>

        <CatalogBooks data={this.state.books}/>
        </div>
        <Footer />
      </div>
    );
  }

  saved(){
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    this.api.post('/book/save', JSON.stringify({title:title, description:description}));
    this.clear();
    this.search();
  }

  search(){
    var a = this;
    this.api.get('/book/all').then(function(response){
        for(var i=0;i<response.length;i++){
          a.setState({books:response});
        }
    });
  }
}

export default RegisterBook;
