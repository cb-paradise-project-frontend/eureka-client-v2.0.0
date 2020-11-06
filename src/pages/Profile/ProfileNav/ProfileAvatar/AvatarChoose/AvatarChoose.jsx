import React from 'react';

import styles from './AvatarChoose.module.scss';

import AvatarDisplay from './AvatarDisplay';
import AvatarFinder from '../../../../../components/Avatar/avatarFinder';
import updateAvatar from '../../../../../apis/Profile/updateAvatar';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';

class AvatarChoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosenAvatar: '',
    };

    this.handleAvatarChoose = this.handleAvatarChoose.bind(this);
    this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);
  }

  componentDidMount() {
    const { avatarID } = this.props;

    this.setState({
      choosenAvatar: avatarID,
    });
  }

  handleAvatarChoose(ID) {
    this.setState({
      choosenAvatar: ID,
    });
  }

  handleAvatarSubmit = async () => {
    const { choosenAvatar } = this.state;
    const avatarIDData = {
      avatarId: choosenAvatar,
    };

    const result = await updateAvatar(avatarIDData);

    if (!choosenAvatar || !result) {
      this.props.onNotification({
        status: 'error',
        message: 'update avatar error, check signin status',
      })
    }

    this.props.onNotification({
      status: 'success',
      message: 'update avatar succeeded',
    })

    this.props.onClose(false);
    this.props.onNavAvatarChange();
    this.props.onAvatarChange(this.state.choosenAvatar)
  }

  render() {
    const { onClose } = this.props;
    const avatarArray = new Array(20);
    for (let i = 0; i < avatarArray.length; i += 1) {
      avatarArray[i] = i + 1;
    }

    return (
      <Modal className={styles.avatar_choose_wrapper} onRequestClose={() => onClose(false)} >
        <Modal.Header>
          Please choose your favourite avatar
        </Modal.Header>
        <Modal.Content>
          <div className={styles.avatar_display}>
            {avatarArray.map((index) => {
              const image = AvatarFinder(index);
              const onAvatarChange = () => this.handleAvatarChoose(index);
              const { choosenAvatar } = this.state;

              return (
                <AvatarDisplay
                  key={index}
                  id={index}
                  image={image}
                  onAvatarChange={onAvatarChange}
                  choosenAvatar={choosenAvatar}
                />
              );
            })}
          </div>
        </Modal.Content>
        <Modal.Footer>
          {/* <button className={styles.choose} onClick={this.handleAvatarSubmit}>
            Choose this as your profile avatar
          </button> */}
        <Button color='blue' onClick={this.handleAvatarSubmit} >
          Choose this as your profile avatar
        </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AvatarChoose;
