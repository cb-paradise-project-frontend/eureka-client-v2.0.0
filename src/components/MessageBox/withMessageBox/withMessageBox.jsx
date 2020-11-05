import React from 'react';
import MessageBox from '..';

const withMessageBox = (message) => (initialState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props){
      super(props);
      
      this.state = {
        showMsgBox: initialState,//successSubmit
      };
      this.toggleMsgBox = this.toggleMsgBox.bind(this);    
    }

    toggleMsgBox() { //toggleLoadingPage
      this.setState((prevState) => ({
        showMsgBox: !prevState.showMsgBox,
      }));
    };

    render() {
      const MsgBoxContent = ({onRequestClose}) => (
        this.state.showMsgBox 
          && 
        <MessageBox 
          info={message}
          onRequestClose={onRequestClose}
        />
      );
      return (
        <Component
          toggleMsgBox={this.toggleMsgBox}
          MsgBoxContent={MsgBoxContent}
          {...this.props}
        />
      )
    }
  }
);

export default withMessageBox;

