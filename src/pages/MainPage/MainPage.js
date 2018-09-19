import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../../static/svg/logo.svg';

import { setName } from '../../actions/app';

class App extends Component {
  render() {
    const { name, setName } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {name}
        </p>
        <button onClick={() => setName('REACT REDUX CORDOVA BOILERPLATE')}>SHOW NAME</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.app.name,
});

const mapDispatchToProps = dispatch => ({
  setName: bindActionCreators(setName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
