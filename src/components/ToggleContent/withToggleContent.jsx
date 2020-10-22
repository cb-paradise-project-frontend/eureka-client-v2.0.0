import React from 'react';

// a draft HOC, not tested, not bug free, just for inspiration

const withToggleContent = (initState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: initState,
      };

      this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }

    render() {
      const ControlledContent = ({ children }) => (
        this.state.show && children
      );

      return (
        <Component
          toggleShow={this.toggleShow}
          ControlledContent={ControlledContent}
          {...this.props}
        />
      );
    }
  }
);

export default withToggleContent;

// example of calling withToggleContent

// const ParentComponent = ({ toggleShow, ControlledComponent }) => (

// );

// export default withToggleContent(false)(ParentComponent);