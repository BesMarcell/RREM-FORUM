import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {

    return (
      <div style={{height: '100%'}} >
        {this.props.children}
      </div>
    );
  }
}

export default App
