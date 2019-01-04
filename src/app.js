import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    /**
     * @title 文案
     * @description 填写文案
     */
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'react根组件',
  };
  render() {
    const text = this.props.text;
    return (
      <div className="react-cmp">
        <p>{text}</p>
        {this.props.children}
      </div>
    );
  }
}
