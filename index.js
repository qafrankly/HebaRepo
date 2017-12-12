import React, { Component, PropTypes } from 'react';


class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render()
{ return (<div className="blah">test</div>); }
}

export default RandomTest;
