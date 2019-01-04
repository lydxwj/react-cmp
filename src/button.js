import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    /**
     * @title 样式定义
     * @description 通过CSS定义按钮的样式
     */
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
      background: PropTypes.string,
      padding: PropTypes.string,
    }),
  };

  static defaultProps = {
    style: {
      color: '#fff',
      background: 'green',
      padding: '4px',
    },
  };
  render() {
    const style = this.props.style;
    return (
      <button style={style}>{this.props.children}</button>
    );
  }
}
