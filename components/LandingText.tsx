import React, { Component } from 'react';
import Typist from 'react-typist';

export default class MyComponent extends Component {
  render() {
    return (
      <Typist>
        <span>I'm Jeff Hogg</span>
        <br />
        <span className="text-indigo-200">a Full-stack web developer</span>
      </Typist>
    );
  }
}
