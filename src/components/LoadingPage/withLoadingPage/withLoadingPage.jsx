import React from 'react';
import LoadingPage from '../LoadingPage';

const withLoadingPage = (initialState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props){
      super(props);
      
      this.state = {
        loading: initialState,//postStatus
      };
      this.toggleLoadingPage = this.toggleLoadingPage.bind(this);    
    }

    toggleLoadingPage() { //toggleLoadingPage
      this.setState((prevState) => ({
        loading: !prevState.loading,
      }));
    };

    render() {
      const LoadingContent = ({ children }) => ( //LoadingPage载具，children
        <React.Fragment>
        {this.state.loading ? <LoadingPage /> : children }
        </React.Fragment>
      );

      return (
        <Component
          toggleLoadingPage={this.toggleLoadingPage}
          LoadingContent={LoadingContent}
          {...this.props}
        />
      )
    }
  }
);

export default withLoadingPage;

