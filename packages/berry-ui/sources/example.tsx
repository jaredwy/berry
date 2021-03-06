import Faker = require('faker');
import React = require('react');

import {Input}                  from './widgets/Input';

import {Div, StylePositionEnum} from './Div';
import {render}                 from './index';

Faker.seed(4242);
const lorem = Faker.lorem.paragraphs(4);

class Focusable extends React.Component {
  state = {
    focus: false,
  };

  handleFocus = () => {
    this.setState({focus: true});
  };

  handleBlur = () => {
    this.setState({focus: false});
  };

  render = () =>
    <Div onFocus={this.handleFocus} onBlur={this.handleBlur} style={{width: 10, height: 5, backgroundColor: this.state.focus ? `lightblue` : `white`}}>
      <Input style={{width: 10, height: 5}} defaultValue={`42`} />
    </Div>
  ;
}

class App extends React.Component {
  state = {
    foo: 30,
  };

  render = () =>
    <Div style={{width: `100%`, height: `100%`, backgroundColor: `red`}}>
      <Div style={{position: StylePositionEnum.Absolute, left: 2, top: 1}}>
        <Focusable />
      </Div>
      <Div style={{position: StylePositionEnum.Absolute, right: 2, bottom: 1}}>
        <Focusable />
      </Div>
    </Div>
  ;
}

render(<App/>).catch(error => {
  console.error(error.stack);
});
