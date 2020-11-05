import React from 'react';
import LoginModal from '../LoginModal';


const withLoginModal = (initialState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        showLoginModal: initialState,
      };

      this.toggleLoginModal = this.toggleLoginModal.bind(this);
    }

    toggleLoginModal() {
      this.setState((prevState) => ({
        showLoginModal: !prevState.showLoginModal,
      }))
    };

    render() {
      const LoginContent = () => (
        this.state.showLoginModal && <LoginModal pageToggler={this.toggleLoginModal} /> 
      )
      return(
        <Component 
          toggleLoginModal={this.toggleLoginModal}
          LoginContent={LoginContent}
          {...this.props}
        />

      )
    }
  }
)

export default withLoginModal;