import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Avatar extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    /**
     * @title 头像地址
     */
    src: PropTypes.string,

    /**
     * @title 头像大小
     * @description 数字值
     */
    size: PropTypes.number,
  };

  static defaultProps = {
    width: 50,
    height: 50,
  };
  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
    };
    return (
      <div>
        { this.props.src ? <img className="photo" src={this.props.src} style={style}/> : '没有photo' }
      </div>
    );
  }
}
