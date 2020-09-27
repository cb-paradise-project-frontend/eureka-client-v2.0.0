import React, { Component } from 'react';

export default class ToggleContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { toggle, content } = this.props;
    const { show } = this.state;
    return (
      <>
        {toggle(this.toggleShow)}
        {show && content(this.toggleShow)}
      </>
    );
  }
}
