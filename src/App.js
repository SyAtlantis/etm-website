import React, { Component } from 'react';
import {Route,BrowserRouter,Switch,Redirect} from 'react-router-dom';
import intl from 'react-intl-universal';
import _ from "lodash";
import http from "axios";

import './App.less';
// import './style/antd-patch.less';
// import './style/global.less';

import Home from './router/home/Home';
import Knownledge from './router/knownledge/Knownledge';
import Ecosystem from './router/ecosystem/Ecosystem';
import Consensus from './router/consensus/Consensus';
import Moore from './router/moore/Moore';

const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  }
];


class App extends Component {
  state = {initDone: false}

  componentDidMount() {
      this.loadLocales();
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
        urlLocaleKey: "lang",
        cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "zh-CN";
    }
    global.lang=currentLocale;
    http
      .get(`locales/${currentLocale}.json`)
      .then(res => {
          return intl.init({
          currentLocale,
          locales: {
              [currentLocale]: res.data
          }
          });
      })
      .then(() => {
          this.setState({ initDone: true });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/knownledge' component={ Knownledge } />
          <Route path='/ecosystem' component={ Ecosystem } />
          <Route path='/consensus' component={ Consensus } />
          <Route path='/moore' component={ Moore } />
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


