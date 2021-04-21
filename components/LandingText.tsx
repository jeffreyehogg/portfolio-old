import React, { Component } from 'react';
import Typist from 'react-typist';

export default class MyComponent extends Component {
  render() {
    return (
      <Typist>
        <span className="text-blue-600">Hey, I'm Jeff Hogg</span>
        <br />
        <span>a full-stack web developer</span>
      </Typist>
    );
  }
}
