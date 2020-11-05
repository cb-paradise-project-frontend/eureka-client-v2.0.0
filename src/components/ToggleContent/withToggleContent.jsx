import React from 'react';

const withToggleContent = (showState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showState 
      };

      this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(target)  {
      return () => {
      this.setState((prevState) => ({
        showState:{
          ...prevState.showState,
          [target]: !prevState.showState[target],
        }
      })) 
    }
  }

    render() {
      const { showState } = this.state;
      const ControlledContent = Object.keys(showState).reduce((obj, key) => { 
        return {
          ...obj,
          [key]: ({ children }) => (this.state.showState[key] ? children : null),
        };
      }, {});
      
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