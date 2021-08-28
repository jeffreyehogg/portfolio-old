import React, { Component } from 'react'
import Typist from 'react-typist'

export default class MyComponent extends Component {
  render() {
    return (
      <Typist>
        <span className='text-indigo-200'>Full Stack Developer</span>
        <Typist.Backspace count={20} delay={200} />
        <span className='text-indigo-200'>Software Developer</span>
        <Typist.Backspace count={9} delay={200} />
        <span className='text-indigo-200'>Engineer</span>
      </Typist>
    )
  }
}
