import React from 'react';
import { withRouter } from 'react-router-dom'

import styles from './PostTaskStyles.module.scss';

import PostTaskForm from './PostTaskForm';
import Modal from '../../components/ModalTest';
import AlertModal from '../../pages/PostTask/AlertModal';

class PostTask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAlert: false,
    }

    this.toggleAlertModal = this.toggleAlertModal.bind(this);
  }

  toggleAlertModal(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showAlert: !prevState.showAlert,
    }))
  }

  render() {
    const { showAlert } = this.state;

    return (
      <Modal onRequestClose={this.toggleAlertModal}>
      <div className={styles.container}>
        {showAlert && (
          <AlertModal 
            onRequestClose={this.toggleAlertModal}
            onLeftBtnClick={this.toggleAlertModal}
            onRightBtnClick={this.props.history.goBack}
          />
          )}
        <PostTaskForm />
      </div>
    </Modal>
    );
  }
}
export default withRouter(PostTask);
